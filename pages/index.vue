<template>
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-4">Open Page {{ userStore }}</h1>
        <p>This page is accessible to everyone, regardless of authentication status.</p>
    </div>
</template>

<script setup>
import { useUserStore } from "~~/stores/auth";
const userStore = useUserStore();
</script>

<style scoped>
/* Add any specific styling you want for the open page */
</style>