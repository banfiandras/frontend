

<template>
<div class="page-container">
    
  <div class="row justify-content-center">
      <div class="col-md-8"> 
          <div class="row">

              <div class="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                <div class="clickable-element btn btn-primary" style="background-image: url('/images/fields.PNG')" @click="elementClicked(elements[0])"></div>
              </div>
            
              <div class="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                <div class="clickable-element btn btn-primary" style="background-image: url('/images/forest.PNG')" @click="elementClicked(elements[1])"></div>
              </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
              <div class="clickable-element btn btn-primary" style="background-image: url('/images/temple.PNG')" @click="elementClicked(elements[4])"></div>
            </div>
          </div>
          

          <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                <div class="clickable-element btn btn-primary" style="background-image: url('/images/town.PNG')" @click="elementClicked(elements[3])"></div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                <div class="clickable-element btn btn-primary" style="background-image: url('/images/military.PNG')" @click="elementClicked(elements[2])"></div>
              </div>
          </div>
      </div>
      <div class="col-md-4 menu-side d-flex flex-column justify-content-start align-items-center">
        <div class="btn-group-vertical">
          <div v-if="selectedGod" class="selected-god-info">
            
            <h3>Selected God: {{ selectedGod.name }}</h3>
            <img :src="selectedGod.image" alt="God Image">
            <p>{{ selectedGod.description }}</p>
          </div>
          <div class="row">
            <button class="btn btn-primary mb-2 menu-side-button col-md-12">valami1</button>
            <button class="btn btn-primary mb-2 menu-side-button col-md-12">valami2</button>
          </div>
          
        </div>
      </div>
  </div>

    
      

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

    
    <!-- ---------------------------------------selected god------------------------------------- -->
    <div v-if="selectedGod && selectedGod.name">
      <h3>{{ selectedGod.name }}</h3>
      <img v-if="selectedGod.imagePath" :src="selectedGod.imagePath" :alt="selectedGod.name">
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


//------------------------------------------------elements------------------------------------------------

const elements = ref([
  { id: 1, class: 'fields', img: '/images/fields.PNG', travelTime: '1 hour', distance: '50 miles'},
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
