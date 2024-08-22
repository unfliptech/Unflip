<template>
    <div v-if="showDialog" class="dialog" style="background-color: black;">
        <input v-model="phone" type="text" placeholder="Enter your phone number" />
        <button @click="submitPhone">Submit</button>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore();
const phone = ref('');

const showDialog = computed(() => authStore.phoneInputDialogOpen);

const submitPhone = () => {
    authStore.login(phone.value);
    authStore.closePhoneInputDialog();
    // Continue with redirection or other logic
};
</script>
