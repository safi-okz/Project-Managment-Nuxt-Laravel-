<template>
  <BoardLayout class="p-2 overflow-y-auto ">
        <Heading class="flex justify-between items-center">
            <span>{{ props.board.title }}</span>
            <PlusCircleIcon class="size-6 cursor-pointer stroke-green-400" @click.prevent="showTicketFrom = !showTicketFrom"></PlusCircleIcon>
        </Heading>

        <div class="flex flex-col gap-3">
            <TicketStatic :board="board" v-if="showTicketFrom" />
            <Draggable  
                        group="board" 
                        v-model="props.board.tickets" 
                        @change="handleChange" 
                        class="flex flex-col gap-3 min-h-60"
                        
                >
                <template #item="{ element }">
                    <TicketDynamic :ticket="element" />
                </template>
            </Draggable>
        </div>
  </BoardLayout>
</template>

<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import Draggable from 'vuedraggable';

const props = defineProps({
    board: Object
});

const { api } = useAxios();

const showTicketFrom = ref(false);

function handleChange(event) {



if (event?.moved) {

    const { element, newIndex, oldIndex } = event.moved


    updateTicket({
        ticketId: element.id,
        newIndex,
        oldIndex
    })


    // this is when ticket is moved in the same board
}

else if (event?.added) {

    const { element, newIndex, oldIndex } = event.added


    updateTicket({
        ticketId: element.id,
        newIndex,
        oldIndex,
        boardToId: props.board.id
    })
}

}

function updateTicket(payload) {
    let requiredTicket = props.board.tickets.find(t => t.id == payload.ticketId);

    if (payload.boardToId) {
        requiredTicket = {
            ...requiredTicket,
            board_id: payload.boardToId
        };
    }

    requiredTicket = {
        ...requiredTicket,
        ranke: payload.newIndex + 1
    };

    console.log('Updating ticket with payload:', requiredTicket);

    api.post(`/api/ticket/${payload.ticketId}/move`, requiredTicket)
        .then(({data}) => {
            console.log("Ticket updated successfully:", data);
        })
        .catch(err => {
            console.log("Error updating ticket:", err.response.data);
        });
}

// function updateTicket(payload) {

  

// let requiredTicket = props.board.tickets.find(t => t.id == payload.ticketId)

// if (payload.boardToId) {
   
//     // code to update ticket board
//     requiredTicket = {
//         ...requiredTicket,
//         board_id: payload.boardToId
//     }
// }

// requiredTicket = {
//     ...requiredTicket,
//     rank: payload.newIndex + 1
// }


// api.post(`/api/ticket/${payload.ticketId}/move`, requiredTicket).then(({data}) => {
//     console.log("data", data)
// }).catch(err => {
//     console.log("err",err.response.data)
// })

// }   
</script>

<style>

</style>