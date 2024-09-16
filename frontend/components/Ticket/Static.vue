<template>
  <TicketLayout>
    <form @submit.prevent="" class="flex flex-col gap-2">
        <FormInput type="text" placeholder="Ticket title" name="ticket_title" v-model="ticketForm.title" />
        <FormInput type="textarea" placeholder="Description" name="ticket_description" v-model="ticketForm.description" />
        <FormButton variant="secondary" >Add</FormButton>
    </form>
  </TicketLayout>
</template>

<script setup>
const props = defineProps({
    board: Object
});

const ticketForm = reactive({
    title: '',
    description: ''
})
</script>