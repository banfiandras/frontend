<template>
  <div>
    <nav v-if="isDataLoaded" class="navbar navbar-expand-lg bg-body-tertiary headline">
      <div class="container-fluid headline">
        <a class="navbar-brand" href="#">God and Prophet</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Faith point: {{ AppFaith }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Hours: {{ AppTime }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current day: {{ AppDay }}</a>
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
import { useRouter } from 'vue-router';
import axios from 'axios';
import { UpdateHeaderDay, UpdateHeaderTime, UpdateHeaderFaithPoint } from "../src/components/Header";
import Current from "./components/variable.js";

const AppFaith = ref();
const AppTime = ref();
const AppDay = ref();
const isDataLoaded = ref(false);

const fetchData = async () => {
  await UpdateHeaderDay();
  await UpdateHeaderFaithPoint();
  await UpdateHeaderTime();
};

const updateValues = () => {
  AppFaith.value = Current.Faith.data;
  AppTime.value = Current.Time.data;
  AppDay.value = Current.Day.data;
};

onMounted(async () => {
  try {
    console.log('onMounted');
    await fetchData();
    updateValues();
    isDataLoaded.value = true;
  } catch(error) {
    console.error('Error fetching data:', error);
  }
});

watch([Current.Faith, Current.Time, Current.Day], () => {
  console.log("a");
  fetchData();
  updateValues();
});
</script>
