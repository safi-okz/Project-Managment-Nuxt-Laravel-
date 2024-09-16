<template>
    <div>
        <textarea v-if="type === 'textarea'" v-bind="$attrs"  class="input" cols="10"  v-model="model" rows="6" ></textarea>
        <input 
                 v-else
                 v-bind="$attrs" 
                 :class="class"
                 v-model="model"
                 class="input" 
            />
    </div>
</template>

<script setup>

defineProps({
    class: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
});

const model = defineModel();
</script>

<style scoped>
.input {
    @apply block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
}
</style>