<template>
  <div>
    <div class="row">
      <div class="col-md-8">
          <div class="row justify-content-center">
          <div class="col-md-2">
            <button @click="goToMainPage" class="menu-button">return to town</button>
          </div>
          <div class="col-md-10 ">
            <div class="npc-talk-img  lign-items-center align-items-center">
              <img class="npc-talk-img justify-constent-center" src="../../images/banker.PNG">
            </div>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-primary btn-lg npc-actionbutton" @click="help1_valasz()" :disabled="disable1">Help</button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-primary btn-lg npc-actionbutton" @click="help2_valasz(NPCID)" :disabled="disable1">Pray</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="menu-side d-flex flex-column justify-content-center align-items-center">
          <div>
            <div class="god2">
              <img :src="godIMG" alt="Placeholder">
            </div>
            <div>
              <p>{{ CurrentGodName }}</p>
              <p>{{ CurrentGodDesc }}</p>
            </div>
            <div class="row btn-group-vertical">
              <button  v-if="GoodGod" :disabled="disable2" class="btn btn-primary mb-2 menu-side-button col-md-12" id="button1" 
              @click="Hermes()">{{ CurrentabName }} 
              <br> Description: {{ CurrentabDescription }} 
              <br>  Cost: {{ CurrentabCost }}</button>
              <button :disabled="disable2" class="btn btn-primary mb-2 menu-side-button col-md-12" id="button2" @click="Double()">{{ CurrentabName2 }} <br> Description: {{ CurrentabDescription2 }} <br>  Cost: {{ CurrentabCost2 }}</button>

            </div>
          
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
import { help1, help2, NPCCheck, CurrentFaith, noMorehelp, Blessed, talkedTo, endOFDay, GetGodAb, GetGood, noMoreBlessing, GetGodAbName, GetGodAbCost, GetGodAbDescription,  selectGodAbs, winCon, talkAbility, godInfo} from '../npcs/npc';
import {convertHermes} from "../npcs/GodTalkAb.js";
import { useFaithStore, useHelperStore } from './../stores/store.js';
import { storeToRefs } from 'pinia';

const global = storeToRefs(useFaithStore());
const helper = storeToRefs(useHelperStore());
const disable2 = ref(false);
const NPCID = 1;

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
  helper.Helper.value++;
  await Blessed(NPCID);
  disable2.value = true;
  await convertHermes(NPCID);
  await currentFaithFunc();
  const win = await winCon();
  if (win.message === "GG") {
    showPopup.value = true;

  }
  console.log(win.message);
  console.log(showPopup.value);
  disableStuff();
}

async function Double() {
  helper.Helper.value++;
  await Blessed(NPCID);
  disable2.value = true;
  await talkAbility(NPCID);
  await currentFaithFunc();
  const win = await winCon();
  if (win.message === "GG") {
    showPopup.value = true;

  }
  console.log(win.message);
  console.log(showPopup.value);
  disableStuff();
}

const  CurrentabName = ref();
const  CurrentabCost = ref();
const  CurrentabDescription = ref();
const  CurrentabName2 = ref();
const  CurrentabCost2 = ref();
const  CurrentabDescription2 = ref();


async function Ability1(){
  helper.Helper.value++;
  let CurrentGod = await GetGood();
  let avalebleAB = await selectGodAbs(CurrentGod);
  console.log(avalebleAB[0]);
  CurrentabName.value = await GetGodAbName(avalebleAB[0]);
  CurrentabCost.value = await GetGodAbCost(avalebleAB[0]);
  CurrentabDescription.value = await GetGodAbDescription(avalebleAB[0]);
}

async function Ability2(){
  helper.Helper.value++;
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
  helper.Helper.value++;
  disable1.value = true;
  await help1(NPCID);
  currentFaithFunc();
  await talkedTo(NPCID);
  disableStuff();
 
  
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');

  NPCCheck(NPCID)
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';

    szovegCIM.innerText = 'Thanks for your help!';
    szoveg.innerText = 'Thank you! I will have much more customers today!';

    winCon().then(resp =>{
      if (resp === "GG") {
        showPopup.value = true;
      }
      
    })


}

const help2_valasz = async () => {
  helper.Helper.value++;
  disable1.value = true;
  await help2(NPCID);
  currentFaithFunc();
  await talkedTo(NPCID);
  disableStuff();
  
  
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');


  NPCCheck(NPCID)
   
    szovegCIM.innerText = 'So that\'s how you pray every day?';
    szoveg.innerText = 'Maybe your god is not that bad, I had much more customers now that we prayed for it!';
    

  await endOFDay();
}



async function disableStuff() {
  const a = await CurrentFaith(NPCID);
  const szovegCIM = document.getElementById('headlineID');
  const szoveg = document.getElementById('npctalk');


  if(a >= 10){ 
    disable1.value = true;
    disable2.value = true;
    szovegCIM.innerText = 'I believe now!';
    szoveg.innerText = 'I think I understand why you believe in this god. I will join you!';
    p.value = "Converted!!!! <3 :D";
  
  }

  
}

const currentFaithFunc = () =>{
  
    CurrentFaith(NPCID).then(resp=> {
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

   noMoreBlessing(NPCID).then(resp=>{
     a.value = resp;
     if (a.value === 1) {
     disable2.value = true;
    }
   })

   noMorehelp(NPCID).then(resp=> {
     a.value = resp;
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
