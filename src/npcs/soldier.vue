<template>
    this is soldier
    <button @click="goToMainPage">return to military</button>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'military' });
}
</script>

