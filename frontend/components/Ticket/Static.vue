<template>
  <TicketLayout class="border-none shadow-none">
    <form @submit.prevent="addTicket" class="flex flex-col gap-2">
        <FormInput type="text" placeholder="Ticket title" name="ticket_title" v-model="ticketForm.title" />
        <span class="text-red-500">{{ errorBag.title }}</span>
        <FormInput type="textarea" placeholder="Description" name="ticket_description" v-model="ticketForm.description" />
        <span class="text-red-500">{{ errorBag.description }}</span>
        <FormButton variant="secondary" >Add</FormButton>
    </form>
  </TicketLayout>
</template>

<script setup>
const props = defineProps({
    board: Object
});

const { project } = useProject();

const ticketForm = reactive({
    title: '',
    description: '',
    board_id: props.board.id
});

const { api } = useAxios();
const { errorBag, transformValidationError, resetErrorBag } = useCustomError();

const addTicket = async () => {
                resetErrorBag();
                ticketForm.board_id = props.board.id;
                const ranke = props.board.tickets.length + 1;
                try{
                    const response = await api.post(`/api/ticket`, {...ticketForm, ranke});
                    const currentBoard = project.value.boards.find(b => b.id === props.board.id);
                    currentBoard.tickets.push(response.data.data);
                    project.value.boards = project.value.boards.map(b => b.id === props.board.id ? currentBoard : b);
                } catch(error) {
                    transformValidationError(error.response);
                }
}
</script>