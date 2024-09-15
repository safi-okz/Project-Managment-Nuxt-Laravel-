<template>
  <MetaTags title="Projects List" description="all list of projects" />
  <div>
    <ProjectAdd @add="handleProjectAddition" />
  </div>
</template>

<script setup>
const { api } = useAxios();

const projects = ref([]);
onMounted(async () => await projectsLoad());

const projectsLoad = async () => {
      const response = await api.get('/api/projects');
      console.log('prjects response ', response);
}

const handleProjectAddition = () => {
  
}
</script>

<style>

</style>