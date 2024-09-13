<template>
  <div>
    <h1>Projects</h1>
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
</script>

<style>

</style>