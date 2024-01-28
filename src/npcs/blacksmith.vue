<template>
    this is blacksmith
    <button @click="goToMainPage">return to town</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'town' });
}
</script>

