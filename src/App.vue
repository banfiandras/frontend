<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <nav class="navbar navbar-expand-lg bg-body-tertiary headline">
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
          <span class="navbar-text">
            Profile data
          </span>
        </div>
      </div>
  </nav>

  
  <div>
    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { UpdateHeaderDay, UpdateHeaderTime, UpdateHeaderFaithPoint } from "../src/components/Header";
import Current from "./components/variable.js";
import { reactive, computed } from 'vue';

const AppFaith = ref();


const AppDay = computed(() => {
  console.log(Current.Day);
  return Current.Day;
})

const AppTime = computed(() => {
  return Current.Time;
})


onMounted(async() => {
  console.log('onMounted');
  await UpdateHeaderDay();
  await UpdateHeaderFaithPoint();
  await UpdateHeaderTime();
  
});

setInterval()

</script>