<template>
  <div v-if="project" class="flex flex-col">
    <Heading class="text-start">{{ project.title }}</Heading>
    <!-- <p class="text-gray-500">{{ project.description }}</p> -->
   
    <div class="mt-4">
        <FormButton variant="primary" @click.prevent="showBoard = !showBoard">Add Board</FormButton>
    </div>

    <div class="w-full flex gap-2 overflow-x-auto">
        <BoardStatic :project="project" v-if="showBoard"></BoardStatic>
        <BoardDynamicClient v-for="board in project.boards" :key="board.id" :board="board" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const { project } = useProject();

// const project = ref();
const showBoard = ref(false);

const { api } = useAxios();

onMounted(async () => {
   const response = await api.get(`/api/project/${route.params.slug}`);
   project.value = await response.data.data;
   console.log('project get ', response);

})
</script>

<style>

</style>