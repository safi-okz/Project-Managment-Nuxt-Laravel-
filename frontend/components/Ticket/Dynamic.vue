<template>
    <TicketLayout class="p-2">
        <Heading as="h6" class="text-start">{{ ticket.title }}</Heading>
        <p class="text-gray-700">{{ ticket.description }}</p>
    </TicketLayout>
</template>

<script setup>
const props = defineProps({
    ticket: Object
});
</script>