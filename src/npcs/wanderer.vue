<template>
    this is wanderer
    <button @click="goToMainPage">return to forest</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'forest' });
}
</script>

