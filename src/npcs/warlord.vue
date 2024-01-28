<template>
    this is warlord
    <button @click="goToMainPage">return to miliary</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'military' });
}
</script>

