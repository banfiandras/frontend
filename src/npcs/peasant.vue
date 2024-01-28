<template>
    this is peasant
    <button @click="goToMainPage">return to fields</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'fields' });
}
</script>

