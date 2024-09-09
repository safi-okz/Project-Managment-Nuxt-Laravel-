<template>
  <div>
    <h1>Dashboardsss </h1>
    <h1>{{ user }}</h1>
  </div>
</template>

<script setup>
const { user, me } = useAuth();

definePageMeta({
    middleware: ['auth']
})

// onMounted(() => me());
</script>

<style>

</style>