<template>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
    </Head>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    url: String
});
</script>