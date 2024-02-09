<template>


  <div class="temple-img">
    <img src="../../images/temple.PNG">
  </div>
    <div class="menu">
      
      <!-- Go Back to Map Button -->
      <button @click="goToMainPage" class="map-button">Return to Map</button>

      <button @click="buttonAction" class="menu-button">Press Me!</button>
    </div>

    <!-- <div class="temple-img"></div> -->
  </template>

  <script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const buttonAction = () => {
    alert('Main Button Pressed!');
  };

  function goToMainPage() {
    router.push({ name: 'FirstVueComponent' });
  }
  </script>

  <style>
  /* .game-menu {
    width: 100vw;
    height: 100vh;
    background-image: url('images/temple.PNG');
    background-size: 500px;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-repeat: no-repeat;
    padding-left: 20px;
  } */

  .temple-img{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  

  
  </style>
