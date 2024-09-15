<template>
  <MetaTags title="Projects List" description="all list of projects" />
  <div class="flex flex-col gap-10">
    <Heading>Your Projects</Heading>
    <ProjectAdd @add="handleProjectAddition" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" @deleteProject="deleteProject" />
    </div>
  </div>
</template>

<script setup>
const { api } = useAxios();

const projects = ref([]);
onMounted(async () => await projectsLoad());

const projectsLoad = async () => {
      const response = await api.get('/api/projects');
      console.log('prjects response ', response);
      projects.value = response.data.data;
}

const handleProjectAddition = (project) => {
    projects.value = [project, ...projects.value];
}

const deleteProject = (id) => {
 return projects.value = projects.value.filter(el => el.id !== id);
}
</script>

<style>

</style>