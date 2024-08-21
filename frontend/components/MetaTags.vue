<template>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta property="og:description" :content="description" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:image" :content="image" />
        <Meta property="og:url" :content="url" />
        <Meta property="og:type" content="website" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:title" :content="title" />
        <Meta name="twitter:description" :content="description" />
        <Meta name="twitter:image" :content="image" />
    </Head>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: {
        default: '/favicon.ico',
        type: String
    },
    url: {
        default: 'http://localhost:3000',
        type: String
    }
});
</script>