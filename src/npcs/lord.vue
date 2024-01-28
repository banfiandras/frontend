<template>
    this is lord
    <button @click="goToMainPage">return to fields</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'fields' });
}
</script>

