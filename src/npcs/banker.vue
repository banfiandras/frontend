<template>
  
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
