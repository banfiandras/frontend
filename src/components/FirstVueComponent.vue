

<template>
<div class="page-container">
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



  <div class="map-container m0">

    <!-- --------------------------------------UwU----------------------------------------- -->

    <div class="god-info-box" v-if="selectedGod && selectedGod.name">
    <h3>{{ selectedGod.name }}</h3>
    <img v-if="selectedGod.imagePath" :src="selectedGod.imagePath" :alt="selectedGod.name">
    </div>

    <!-- ---------------------------------element creation---------------------------------- -->



    <div
        v-for="element in elements"
        :key="element.id"
        :class="['clickable-element btn btn-primary', element.class, { transparent: element.transparent }]"
        :style="{ 'background-image': 'url(' + element.img + ')' }"
        @click="elementClicked(element)"
      ></div>

    <!-- ---------------------------------popup button creation---------------------------------- -->

    <div v-if="showPopup" class="popup">

      <button class="close-button" @click="closePopup">&times;</button>
      <h2>Travel Information</h2>
      <div class="info">
        <div><p><strong>Travel Time: <span>{{ travelTime }}</span></strong></p></div>
        <div><p><strong>Distance: <span>{{ distance }}</span></strong></p></div>
      </div>
      <button @click="travel()" class="btn btn-primary btn-lg btn-block">Travel to {{ selectedElement?.class }}</button>
      <div class="button-container">
        <button v-for="button in popupButtons" :key="button" @click="handleButtonClicked(button)">{{ button }}</button>
      </div>

    </div>

    <!-- <div v-if="showPopup" class="popup">
      <button class="close-button" @click="showPopup = false">&times;</button>
      <h2>Travel Information</h2>
      <div class="info">
        <p><strong>Travel Time:</strong> {{ travelTime }}</p>
        <p><strong>Distance:</strong> {{ distance }}</p>
      </div>
      <button class="travel-button" @click="travel()">Travel to {{ selectedElement?.class }}</button>
      <div class="button-container">
        <button v-for="button in popupButtons" :key="button" @click="handleButtonClicked(button)">{{ button }}</button>
      </div> -->
    <!-- ---------------------------------------selected god------------------------------------- -->
    <div v-if="selectedGod && selectedGod.name">
  <h3>{{ selectedGod.name }}</h3>
  <img v-if="selectedGod.imagePath" :src="selectedGod.imagePath" :alt="selectedGod.name">
</div>

  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';




const gods = ref([]);

const loading = ref(true);

onMounted(() => {
  axios.get('/api/last-user-god')
    .then(response => {
      if (response.data && response.data.selectedGod) {
        selectedGod.value = response.data.selectedGod;
      }
    })
    .catch(error => {
      console.error('Error fetching the last user and god:', error);
    });
});


const router = useRouter();
const selectedElement = ref(null);
const selectedGod = ref(null);

function selectGod(god) {
  const userId = localStorage.getItem('userId');

  axios.post('/select-god', { user_id: userId, god_id: god.id })
    .then(response => {
        console.log(response.data.message);
        selectedGod.value = god;
        router.push({ name: 'FirstVueComponent' });
    })
    .catch(error => {
    console.error('There was an error!', error);
    if (error.response) {
        console.log(error.response.data);
    }
});
}

//------------------------------------------------elements------------------------------------------------

const elements = ref([
  { id: 1, class: 'fields', img: '/images/fields.PNG', travelTime: '1 hour', distance: '50 miles' },
  { id: 2, class: 'forest', img: '/images/forest.PNG', travelTime: '30 mins', distance: '20 miles' },
  { id: 3, class: 'military', img: '/images/military.PNG', travelTime: '2 hours', distance: '100 miles' },
  { id: 4, class: 'town', img: '/images/town.PNG', travelTime: '45 mins', distance: '30 miles' },
  { id: 5, class: 'temple', img: '/images/temple.PNG', travelTime: '1.5 hours', distance: '70 miles' },
]);

const showPopup = ref(false);
const popupButtons = ref([]);
const travelTime = ref('');
const distance = ref('');

//------------------------------------------------------element clicked--------------------------------------------------

function elementClicked(element) {
  selectedElement.value = element;
  showPopup.value = true;
  travelTime.value = element.travelTime;
  distance.value = element.distance;

  // Toggle transparency state
  element.transparent = !element.transparent;
}

function closePopup() {
  // Reset transparency state for all elements
  elements.value.forEach((element) => {
    element.transparent = false;
  });

  showPopup.value = false;
}

//--------------------------------------------------------button clicked----------------------------------------------

function handleButtonClicked(button) {
  console.log('Button clicked:', button);
  showPopup.value = false;
}

//--------------------------------------------------------travel function-------------------------------------------

function travel() {
  console.log('Travel initiated');
  if (selectedElement.value) {
    const routeName = selectedElement.value.class;

    if (routeName && router.hasRoute(routeName)) {
      router.push({ name: routeName });
      showPopup.value = false;
    } else {
      console.error('No matching route found for:', routeName);
    }
  } else {
    console.error('No element selected');
  }
}

</script>

<!-- ----------------------------------------------------style------------------------------------------ -->

<style></style>
