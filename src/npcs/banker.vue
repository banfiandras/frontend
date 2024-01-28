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

  <div>
    <div class="row">
      <div class="col-md-2">
        <button @click="goToMainPage" class="menu-button">return to town</button>
      </div>
      <div class="col-md-10 justify-content-center">
        <div class="npc-talk-img justify-content-center lign-items-center">
          <img src="../../images/banker.PNG">
        </div>
        <div class="row">
          <div class="col-md-6">
            <button class="btn btn primary npc-actionbutton">Action 1</button>
          </div>
          <div class="col-md-6">
            <button class="btn btn primary npc-actionbutton">Action 2</button>
          </div>
        </div>
      </div>
    </div>
  </div>







  <h1>this is banker</h1>
  

  <div>
    <div>
      <p class="headline-npc" id="banker-headline">Welcome prophet!</p>
      <div>
        <p class="npc-text" id="npc-talk"></p>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-6">
          
        </div>
        <div class="col-md-6">
          
        </div>
      </div>
    </div>


  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'town' });
}
</script>
