<template>
  <BoardLayout class="p-2">
        <Heading class="flex justify-between items-center">
            <span>{{ props.board.title }}</span>
            <PlusCircleIcon class="size-6 cursor-pointer stroke-green-400"></PlusCircleIcon>
        </Heading>
  </BoardLayout>
</template>

<script setup>
import { PlusCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    board: Object
})
</script>

<style>

</style>