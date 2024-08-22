<template>
    <div class="auth-otp">
        <h1>Enter the OTP sent to {{ userStore.phone }}</h1>
        <input v-model="otp" type="text" placeholder="Enter OTP" />
        <button @click="submitOTP">Verify OTP</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const otp = ref('');
const userStore = useUserStore();
const router = useRouter();

const submitOTP = async () => {
    const success = await userStore.verifyOTP(otp.value);

    if (success) {
        router.push('/secure/page1');
    } else {
        alert('Invalid OTP. Please try again.');
    }
};
</script>

<style scoped>
.auth-otp {
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