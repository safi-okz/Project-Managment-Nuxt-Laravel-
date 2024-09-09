<template>
  <div>
    <h1>Dashboardsss </h1>
    <h1>{{ user }}</h1>
  </div>
</template>

<script setup>

definePageMeta({
  middleware: ['auth']
})

const { user} = useAuth();
// onMounted(() => me());
</script>

<style>

</style>