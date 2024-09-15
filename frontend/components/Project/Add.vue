<template>
  <div class="flex flex-col">
      <div class="flex md:flex-row flex-col gap-4 md:items-center md:justify-between">
        <form class="grid grid-cols-1 md:grid-cols-3 gap-2 flex-grow" v-if="showForm">
              <FormGroup name="title" v-model="project.title" :errorMessage="errorBag.title" label="Title" />
              <FormGroup name="description" v-model="project.description" :errorMessage="errorBag.description" label="Description" />
              <button class="w-40 md:mt-5 text-purple-800 font-bold" variant="ghost" @click.prevent="addProject">Save</button>
        </form>
        <FormButton variant="primary" @click="showForm = !showForm">Add Project</FormButton>
      </div>
  </div>
</template>

<script setup>

const project = reactive({
  title: '',
  description: ''
});

const showForm = ref(false);

const { api } = useAxios();
const { errorBag, transformValidationError, resetErrorBag } = useCustomError();

const emit = defineEmits('add');

const addProject = async () => {
  resetErrorBag();
    try{
          const response = await api.post('/api/project', project);
          emit('add', response.data.data);
          console.log('project create response ', response);
    } catch(error) {
          console.log('errorrrrrrr ', error.response.data);
          transformValidationError(error.response);
    }
}
</script>

<style>

</style>