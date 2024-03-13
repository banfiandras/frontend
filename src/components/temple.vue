<template>

    <div class="row">
    
      <div class="menu cpl-md-4 justify-content-center">
        <div class="row">
          <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                  <button @click="goToMainPage" class="map-button">Return to Map</button>
                </div>
                <div class="col-md-12">
                  <button @click="buttonAction" class="menu-button">Sleep</button>
                </div>
            </div>
          </div>
          <div class="col-md-8">
            <h1>This is Temple! Mutherfucker</h1>
            
          </div>

        </div>
      </div>
       
      </div>
    <div class="temple-img">
      <img src="../../images/temple.PNG">
    </div>

    <!-- <div class="temple-img"></div> -->
  </template>

  <script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue'; 
  import axios from 'axios';
  import { useFaithStore, useHelperStore } from './../stores/store.js';
import { storeToRefs } from 'pinia';

const global = storeToRefs(useFaithStore());
const helper = storeToRefs(useHelperStore());

  const router = useRouter();

  const buttonAction = () => {
    alert('SLEEEEEEP!');
    Sleeeep();
    helper.Helper.value++;
  };

  function goToMainPage() {
    router.push({ name: 'FirstVueComponent' });
  }


  const Sleeeep=()=>{
    return axios.get(`http://localhost:8000/api/sleep`)
    .then(resp=>{
        return resp.data;
    })
    .catch( 
        err=>{
            return console.log("fail");
        }
    )
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
  }
  

  
  </style>
