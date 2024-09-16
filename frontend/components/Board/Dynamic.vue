<template>
  <BoardLayout class="p-2 overflow-y-auto ">
        <Heading class="flex justify-between items-center">
            <span>{{ props.board.title }}</span>
            <PlusCircleIcon class="size-6 cursor-pointer stroke-green-400" @click.prevent="showTicketFrom = !showTicketFrom"></PlusCircleIcon>
        </Heading>

        <div class="flex flex-col gap-3">
            <TicketStatic :board="board" v-if="showTicketFrom" />
            <TicketDynamic v-for="ticket in board.tickets" :key="ticket.id" :ticket="ticket" />
        </div>
  </BoardLayout>
</template>

<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    board: Object
});

const showTicketFrom = ref(false);
</script>

<style>

</style>