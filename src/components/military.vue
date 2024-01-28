<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary headline">
  <div class="container-fluid headline">
    <a class="navbar-brand" href="#">God and Prophet</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link">Faith point</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Hours</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Current day</a>
        </li>
      </ul>
      <span class="navbar-text">
        Profile data
      </span>
    </div>
  </div>
</nav>
  <div class="row">
    <div>
      <div class="town-container col-md-8">
      <h1>This is the military component</h1>
      </div>

      <div class="menu col-md-4">
          <button @click="goToMainPage" class="menu-button">Return to Map</button>
        </div>


    </div>
  </div>
   

    <!-- Dynamic NPC creation -->
    <div class="container middle.container">
  <div class="row">
    <div
      v-for="npc in npcs"
      :key="npc.id"
      class="clickable-npc col-md-6 col-lg-3"
      :style="{ 'background-image': 'url(' + npc.img + ')' }"
      @click="talkToNpc(npc)"
    ></div>
  </div>
</div>

      <!-- Popup for NPC interaction -->
      <div v-if="showPopup" class="popup">
        <h2>{{ selectedNpc.name }}: What do you want to do?</h2>
        <button @click="goToTalkMenu">Talk</button>
        <button @click="closePopup">Close</button>
      </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // NPC data
  const npcs = ref([
  { id: 1, name: 'warlord', class: 'warlord', img: 'images/warlord.PNG'},
  { id: 2, name: 'soldier', class: 'soldier', img: 'images/soldier.PNG'}
  ]);

  const showPopup = ref(false);
  const selectedNpc = ref({});

  function talkToNpc(npc) {
    selectedNpc.value = npc;
    showPopup.value = true;
  }

  function goToTalkMenu() {
  if (selectedNpc.value.name === 'warlord') {
    router.push({ name: 'warlord' });
  } else if (selectedNpc.value.name === 'soldier') {
    router.push({ name: 'soldier' });
  }
}

  function closePopup() {
    showPopup.value = false;
  }

  function goToMainPage() {
    router.push({ name: 'FirstVueComponent' });
  }
  </script>

  <style>
  .warlord { top: 300px; left: 400px; }
  .soldier { top: 300px; left: 1000px; }
  </style>
