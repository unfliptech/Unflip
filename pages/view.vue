<template>
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-4">Secure Page</h1>
        {{ authStore.isAuthenticated }}
        <p>This page is only accessible to authenticated users.</p>
    </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();

definePageMeta({
    middleware: 'auth', // This will enforce authentication on this page
});
</script>

<style scoped>
/* Add any specific styling you want for the secure page */
</style>
