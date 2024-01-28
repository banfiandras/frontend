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







  <div class="row m0">
    <div>
      <div class="town-container col-md-8">
      <h1>This is the fields component</h1>
      </div>

      <div class="menu col-md-4">
          <button @click="goToMainPage" class="menu-button">Return to Map</button>
        </div>


    </div>
  </div>

  <!-- <div class="middle-container container">
    <div class="row">
      <div
        v-for="npc in npcs"
        :key="npc.id"
        :class="['clickable-npc col-md-6 col-lg-3', npc.class]"
        :style="{ 'background-image': 'url(' + npc.img + ')' }"
        @click="talkToNpc(npc)"
      ></div>
    </div>
  </div> -->

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
   

    <!-- Dynamic NPC creation -->
    <!-- <div
        v-for="npc in npcs"
        :key="npc.id"
        :class="['clickable-npc', 'col-md-6', npc.class]"
        :style="{ 'background-image': 'url(' + npc.img + ')' }"
        @click="talkToNpc(npc)"
      ></div> -->

      <!-- Popup for NPC interaction -->
      <div v-if="showPopup" class="popup">
        <h2>{{ selectedNpc.name }}: What do you want to do?</h2>
        <button @click="goToTalkMenu">Talk</button>
        <button @click="closePopup">Close</button>
      </div>
        
    <!-- MENU -->
    
  </template>

  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  // NPC data
  const npcs = ref([
    { id: 1, name: 'peasant', class: 'peasant', img: 'images/peasant.PNG' },
    { id: 2, name: 'lord', class: 'lord', img: 'images/lord.PNG' }
  ]);

  const showPopup = ref(false);
  const selectedNpc = ref({});

  function talkToNpc(npc) {
    selectedNpc.value = npc;
    showPopup.value = true;
  }

  function goToTalkMenu() {
  if (selectedNpc.value.name === 'peasant') {
    router.push({ name: 'peasant' });
  } else if (selectedNpc.value.name === 'lord') {
    router.push({ name: 'lord' });
  }
  showPopup.value = false;
}

  function closePopup() {
    showPopup.value = false;
  }

  function goToMainPage() {
    router.push({ name: 'FirstVueComponent' });
  }
  </script>

  <style>
  

  /* .peasant { top: 300px; left: 400px; }
  .lord { top: 300px; left: 1000px; } */

.fields { top: 500px; left: 950px; }
.forest { top: 10px; left: 250px; }
.military { top: 30px; left: 850px; }
.town { top: 500px; left: 300px; }
.temple { top: 250px; left: 600px; }

  </style>












