<script setup>
definePageMeta({
    middleware: 'auth', // This ensures the auth middleware is applied only to this page
});
</script>

<template>
    <div class="secure-page">
        <h1>Welcome to the secure page</h1>
        <p>This content is only visible to authenticated users.</p>
    </div>
</template>

<style scoped>
.secure-page {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}
</style>
