<template>
  <div>
    <nav v-if="isDataLoaded" class="navbar navbar-expand-lg bg-body-tertiary headline">
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
          </ul>
          <span class="navbar-text">Profile data</span>
        </div>
      </div>
    </nav>

    <div v-else>
      Loading...
    </div>

    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { useFaithStore } from './stores/store.js';
import { storeToRefs } from 'pinia';
import { currentDay,currentFaithPoints,currentTime } from '../src/components/Header';

const global = storeToRefs(useFaithStore());
console.log(global.Day.value);
const isDataLoaded = ref(false);

const fetchData = async () => {
   global.Day.value = await currentDay(); 
   global.Faith.value = await currentFaithPoints();
   global.Time.value = await currentTime(); 
};



onMounted(async () => {
  try {
    console.log('onMounted');
    await fetchData();
    isDataLoaded.value = true;
  } catch(error) {
    console.error('Error fetching data:', error);
  }
});

</script>
