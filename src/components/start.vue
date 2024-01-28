<template>
    <div class="god-selection">
    <h1>Choose Your God</h1>
    <div class="gods">
      <div v-for="god in gods" :key="god.id" class="god" @click="selectGod(god)">
        <img :src="god.image" :alt="god.name">
        <h2>{{ god.name }}</h2>
        <p>{{ god.description }}</p>
      </div>
    </div>
    <div v-if="selectedGod" class="selected-god-info">
      <h3>Selected God: {{ selectedGod.name }}</h3>
      <img :src="selectedGod.image" alt="God Image">
      <p>{{ selectedGod.description }}</p>
    </div>
  </div>
  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const selectedGod = ref(null);


const gods = ref([
  { id: 1, name: 'Demeter', image: 'images/demeter.PNG', description: 'Description of God1' },
  { id: 2, name: 'Hermes', image: 'images/hermes.PNG', description: 'Description of God2' },
  { id: 3, name: 'Ares', image: 'images/ares.PNG', description: 'Description of God3' }
]);

const router = useRouter();

function selectGod(god) {
  const userId = localStorage.getItem('userId');

  axios.post('/api/select-god', { user_id: userId, god_id: god.id })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}
</script>

  <style>
  .god-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .gods {
    display: flex;
  }

  .god {
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }

  .god img {
    width: 300px;
    height: 100px;
  }
  </style>
