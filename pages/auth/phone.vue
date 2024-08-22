<template>
    <div class="auth-phone">
        <h1>Enter your phone number</h1>
        <input v-model="phone" type="text" placeholder="Enter phone number" />
        <button @click="submitPhone">Submit</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const phone = ref('');
const userStore = useUserStore();
const router = useRouter();

const submitPhone = async () => {
    userStore.setPhone(phone.value);
    const success = await userStore.sendOTP();

    if (success) {
        router.push('/auth/otp');
    } else {
        alert('Failed to send OTP. Please try again.');
    }
};
</script>

<style scoped>
.auth-phone {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

button {
    padding: 10px 15px;
}
</style>