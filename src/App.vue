<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary headline">
      <div class="container-fluid headline">
        <a class="navbar-brand" href="#">God and Prophet</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Faith point: {{ global.Faith }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Hours: {{ global.Time }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current day: {{ global.Day }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current energy: {{ global.Sleeep }}</a>
            </li>
          </ul>
          <button @click="pushRegister()" class="btn btn-primary mb-2 menu-side-button ">Registration</button>
        </div>
      </div>
    </nav>

    

    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useFaithStore, useHelperStore } from './stores/store.js';
import { storeToRefs } from 'pinia';
import { currentDay,currentEnergy,currentFaithPoints,currentTime } from '../src/components/Header';
import { endOFDay } from './npcs/npc.js';

const global = storeToRefs(useFaithStore());
console.log(global.Day.value);
const isDataLoaded = ref(false);
const router = useRouter();
const helper = storeToRefs(useHelperStore());

const fetchData = async () => {
   global.Day.value = await currentDay(); 
   global.Faith.value = await currentFaithPoints();
   global.Time.value = await currentTime(); 
   global.Sleeep.value = await currentEnergy();
};

const pushRegister = () =>{
  router.push({ name: 'registration' });
}

onMounted(async () => {
  try {
    console.log('onMounted');
    await fetchData();
    isDataLoaded.value = true;
  } catch(error) {
    console.error('Error fetching data:', error);
  }
});

watch(() => helper.Helper.value, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    await fetchData();
    await endOFDay();
    fetchData();
    console.log("gay");
    console.log(helper.Helper.value);
  }
});

</script>
