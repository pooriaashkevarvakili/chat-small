<template>
    <div class="text-center">
        {{ name }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    name: String
})

</script>

<style>
</style>