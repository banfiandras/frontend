<template>
  <div>
    <div class="row">
      <div class="col-md-8">
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
      <div class="col-md-4">
        <div>

        </div>
        <div class="menu-side d-flex flex-column justify-content-start align-items-center">
        <div class="btn-group-vertical">
          <div>
            <img :src="godIMG" alt="Placeholder">
          </div>
          <div>
            <p>{{ CurrentGodName }}</p>
            <p>{{ CurrentGodDesc }}</p>
          </div>
          <div class="row">
            <button v-if="GoodGod" class="btn btn-primary mb-2 menu-side-button col-md-12" id="button1" @click="Hermes()">{{ CurrentabName }} <br> Description:{{ CurrentabDescription }} <br>  Cost: {{ CurrentabCost }}</button>
            <button class="btn btn-primary mb-2 menu-side-button col-md-12" id="button2" @click="Double()">{{ CurrentabName2 }} <br> Description: {{ CurrentabDescription2 }} <br>  Cost: {{ CurrentabCost2 }}</button>

          </div>
          
        </div>
      </div>
      </div>
    </div>
    
  </div>


  <button @click="AbList()">sdad</button>
  <div>
    <div>
      <p class="headline-npc" id="headlineID">Welcome Prophet!</p>
      <div>
        <p class="npc-text" id="npctalk">What can I help you with? You need a loan?</p>
      </div>
    </div>
  </div>

  <div>
    <p>{{ p }}</p>
  </div>

  <div v-if="showPopup" class="popup">

    
    <h2>Congratulations, you win!</h2>
    <div class="button-container">
      <button @click="OkButton()">Ok</button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { help1, help2, NPCCheck, CurrentFaith, noMorehelp, talkedTo, endOFDay, GetGodAb, GetGood, GetGodAbName, GetGodAbCost, GetGodAbDescription,  selectGodAbs, winCon, talkAbility, godInfo} from '../npcs/npc';
import {convertHermes} from "../npcs/GodTalkAb.js";
import { useFaithStore } from './../stores/store.js';
import { storeToRefs } from 'pinia';
import { currentDay,currentFaithPoints,currentTime } from '../components/Header.js';

const global = storeToRefs(useFaithStore());
const fetchData = async () => {
   global.Day.value = await currentDay(); 
   global.Faith.value = await currentFaithPoints();
   global.Time.value = await currentTime(); 
};

const gods = [
  {  image: 'images/demeter.PNG'},
  {  image: 'images/hermes.PNG'},
  {  image: 'images/ares.PNG' }
];
const godIMG = ref();

async function IMGSet(){
  let CurrentGod = await GetGood();
  godIMG.value = gods[CurrentGod-1].image;
}

const CurrentGodName = ref();
const CurrentGodDesc = ref();

async function GetGodInfo() {
  let CurrentGod = await GetGood();
  const gofInfos = await godInfo(CurrentGod);
  CurrentGodName.value = gofInfos.god.Name;
  CurrentGodDesc.value = gofInfos.god.AbilityDescription;
  console.log(gofInfos.god.AbilityDescription);
  
}

const p = ref(0);

const showPopup= ref (false);

const OkButton = () =>{
  router.push( {name: 'start'} );
  showPopup.value = false;
}


let CurrentGod;
let GoodGod = ref();

async function GodCheck(godID) {
  console.log(godID);
  if (godID === 2) {
    GoodGod.value = true;
  }
  else{
    GoodGod.value = false;
  }
}

async function Hermes() {
  await convertHermes(1);
  await currentFaithFunc();
  const win = await winCon();
  if (win.message === "GG") {
    showPopup.value = true;

  }
  console.log(win.message);
  console.log(showPopup.value);
}

async function Double() {
  await talkAbility(1);
  await currentFaithFunc();
  const win = await winCon();
  if (win.message === "GG") {
    showPopup.value = true;

  }
  console.log(win.message);
  console.log(showPopup.value);
}

const  CurrentabName = ref();
const  CurrentabCost = ref();
const  CurrentabDescription = ref();
const  CurrentabName2 = ref();
const  CurrentabCost2 = ref();
const  CurrentabDescription2 = ref();


async function Ability1(){
  fetchData();
  let CurrentGod = await GetGood();
  let avalebleAB = await selectGodAbs(CurrentGod);
  console.log(avalebleAB[0]);
  CurrentabName.value = await GetGodAbName(avalebleAB[0]);
  CurrentabCost.value = await GetGodAbCost(avalebleAB[0]);
  CurrentabDescription.value = await GetGodAbDescription(avalebleAB[0]);

}

async function Ability2(){
  fetchData();
  let CurrentGod = await GetGood();
  let avalebleAB = await selectGodAbs(CurrentGod);
  console.log(avalebleAB[1]);
  CurrentabName2.value = await GetGodAbName(avalebleAB[1]);
  CurrentabCost2.value = await GetGodAbCost(avalebleAB[1]);
  CurrentabDescription2.value = await GetGodAbDescription(avalebleAB[1]);

}


let disable1 = ref(false);

const router = useRouter();

function goToMainPage() {
  router.push({ name: 'town' });
}

const help1_valasz = async () => {
  fetchData();
  disable1.value = true;
  await help1(1);
  currentFaithFunc();
  await talkedTo(1);
  disableStuff();
 
  
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');

  NPCCheck(1)
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';

    szovegCIM.innerText = 'Thanks for your help!';
    szoveg.innerText = 'Thank you! I will have much more customers today!';

    await endOFDay();
    winCon().then(resp =>{
      if (resp === "GG") {
        showPopup.value = true;
      }
      
    })


}

const help2_valasz = async () => {
  fetchData();
  disable1.value = true;
  await help2(1);
  currentFaithFunc();
  await talkedTo(1);
  disableStuff();
  
  
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');


  NPCCheck(1)
   
    szovegCIM.innerText = 'So that\'s how you pray every day?';
    szoveg.innerText = 'Maybe your god is not that bad, I had much more customers now that we prayed for it!';
    

  await endOFDay();
}



async function disableStuff() {
  const a = await CurrentFaith(1);
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');


  if(a >= 10000){ 
    disable1.value = true;
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';
    p.value = "Converted!!!! <3 :D";
  
  }

  
}

const currentFaithFunc = () =>{
  
    CurrentFaith(1).then(resp=> {
    p.value = resp;
    if (p.value >= 10) {
      disable1.value = true;
    }
  })

  
}

const a = ref(false);



onMounted(() => {
  GetGood().then((resp)=>{
    CurrentGod = resp;
    console.log(CurrentGod);
    GodCheck(CurrentGod);
  });
  
  currentFaithFunc();
  disableStuff();
  Ability1();
  Ability2();
  IMGSet();
  GetGodInfo();

   noMorehelp(1).then(resp=> {
     a.value = resp;
     console.log(resp);
     if (a.value === 1) {
     disable1.value = true;
    }
   })
   
  
})

let Abilities = ref({});


let valami = ref();
let ability = ref();
let abNev =[];// ref([]);





</script>
