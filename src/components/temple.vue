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
