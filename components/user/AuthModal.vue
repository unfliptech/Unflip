<template>
    <div v-if="showModal" class="modal-background">
        <div class="modal">
            <h3>Enter Your Phone Number</h3>
            <input type="text" v-model="phone" placeholder="Enter phone number" />
            <button @click="submitPhone">Submit</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const phone = ref('');
const showModal = ref(true);
const router = useRouter();

function submitPhone() {
    // Redirect to OTP page with the entered phone number
    router.push({ path: '/auth/otp', query: { phone: phone.value } });
}
</script>

<style scoped>
/* Add modal styles here */
</style>