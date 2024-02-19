<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-2">
        <button @click="goToMainPage" class="menu-button">return to town</button>
      </div>
      <div class="col-md-10 justify-content-center">
        <div class="npc-talk-img justify-content-center lign-items-center align-items-center">
          <img src="../../images/banker.PNG">
        </div>
        <div class="row">
          <div class="col-md-6">
            <button class="btn btn-primary btn-lg npc-actionbutton" @click="help1_valasz()" :disabled="disable1">Help</button>
          </div>
          <div class="col-md-6">
            <button class="btn btn-primary btn-lg npc-actionbutton" @click="help2_valasz(1)" :disabled="disable1">Pray</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div>
      <p class="headline-npc" id="headlineID">Welcome Prophet!</p>
      <div>
        <p class="npc-text" id="npctalk">What can I help you with? You need a loan?</p>
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
import { ref, onMounted } from 'vue';
import { help1, help2, NPCCheck, CurrentFaith } from '../npcs/npc';

const disable1 = ref(false);

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'town' });
}

const help1_valasz = () => {
  help1(1);
  
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');

  NPCCheck(1)
    // Your logic when data is false
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';
    disable1.value = true;

    // Your logic when data is not false
    szovegCIM.innerText = 'Thanks for your help!';
    szoveg.innerText = 'Thank you! I will have much more customers today!';
    disable1.value = false;

  
  

  
}








const help2_valasz = () => {
  help2(1);
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');


  NPCCheck(1)
   
  
    // Your logic when data is false
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';
    disable1.value = true;
  
    // Your logic when data is not false
    szovegCIM.innerText = 'So that\'s how you pray every day?';
    szoveg.innerText = 'Maybe your god is not that bad, I had much more customers now that we prayed for it!';
    disable1.value = false;
  



  
}
const p = ref();
CurrentFaith(1).then(resp=> {
  p.value = resp;
  console.log(p.value);
})




</script>
