<template>
    <div>
        <button @click="toggleDropdown" class="relative focus:outline-none">
            <span v-if="isAuthenticated" class="font-bold">{{ userName }}</span>
            <span v-else class="font-bold">Profile</span>
        </button>

        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
            <ul>
                <li v-if="isAuthenticated">
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Logout
                    </button>
                </li>
                <li v-else>
                    <NuxtLink to="/auth/phone" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Login
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const { isAuthenticated, userName } = authStore;
const dropdownOpen = ref(false);

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const logout = () => {
    authStore.logout();
    dropdownOpen.value = false;
    // Redirect to homepage or any other page
    navigateTo('/');
};
</script>