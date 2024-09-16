<template>
  <BoardLayout>
        <form class="flex flex-col gap-2" @submit.prevent="addBoard">
            <div class="flex items-center w-full gap-2">
                <FormInput placeholder="Board Title" class="flex-grow-1" v-model="boradForm.title" />
                <FormButton type="submit" variant="secondary">Add</FormButton>
            </div>
            <span class="text-red-500">{{ errorBag?.title }}</span>
        </form>
  </BoardLayout>
</template>

<script setup>
const props = defineProps({
    project: Object
});

const emit = defineEmits(['add']);

const { api } = useAxios();

const { errorBag, resetErrorBag, transformValidationError } = useCustomError();

const boradForm = reactive({
    title: '',
    project_id: props.project.id
});

const addBoard = async () => {
    resetErrorBag();
    boradForm.project_id = props.project.id;
        try{
            const response = await api.post(`/api/board`, boradForm);
            console.log('response board done ', response);
            emit('add', response.data.data);
        } catch(error) {
            transformValidationError(error.response)
        }
}
</script>

<style>

</style>