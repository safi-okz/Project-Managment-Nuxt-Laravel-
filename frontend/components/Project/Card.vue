<template>
  <NuxtLink :to="`/dashboard/projects/${project.id}`" class="flex flex-col gap-2 p-2 rounded-lg shadow">
        <Heading as="h6" class="text-start flex items-center justify-between">
            <span>{{ project.title }}</span>
            <TrashIcon @click.prevent="deleteProject(project.id)" class="size-5 text-red-600"></TrashIcon>
        </Heading>
        <p class="text-gray-600">{{ project.description }}</p>
  </NuxtLink>
</template>

<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    project: {
        type: Object,

    }
});

const emit = defineEmits(['deleteProject'])

const { api } = useAxios();
const { transformValidationError } = useCustomError();

const deleteProject = async (projectId) => {
        try {
                const response = await api.delete(`/api/project/${projectId}`);
                emit('deleteProjectId', projectId);
                console.log('project delete done ', response.data);
        } catch(error) {
            console.log('delete project error ', error);
            transformValidationError(error.response);
        }
}
</script>

<style>

</style>