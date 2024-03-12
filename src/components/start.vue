<template>
  <div class="god-selection">
    <h1>Choose Your God</h1>
    <div class="gods">
      <div class="god" @click="select_god(1), goToFirst()">
        <img src="../../images/demeter.PNG" alt="Demeter">
        <h2>Demeter</h2>
        <p>{{ god1 }}</p>
      </div>
      <div class="god" @click="select_god(2), goToFirst()">
        <img src="../../images/hermes.PNG" alt="Hermes">
        <h2>Hermes</h2>
        <p>{{ god2 }}</p>
      </div>
      <div class="god" @click="select_god(3), goToFirst()">
        <img src="../../images/ares.PNG" alt="Ares">
        <h2>Ares</h2>
        <p>{{ god3 }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Axios from 'axios';
import { onMounted } from 'vue'

onMounted(async () => {
  delay(10)
  dgod1();
  dgod2(); 
  dgod3(); 
  await reset_foryou();
})

const description = ref();

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const god1 = ref();

async function dgod1(){
  const god1info = await godInfo(1);
  god1.value = god1info.god.AbilityDescription;
}

const god2 = ref();

async function dgod2(){
  const god1info = await godInfo(2);
  god2.value = god1info.god.AbilityDescription;
}

const god3 = ref();

async function dgod3(){
  const god1info = await godInfo(3);
  god3.value = god1info.god.AbilityDescription;
}



const router = useRouter();

const select_god = (godId) => {
  
    return Axios.get(`http://localhost:8000/api/select-god/${godId}`)
    .then(resp =>{
        return resp.data;
    })
    .catch(
        err=>{
            return "fail;"
        }
    )

}

const godInfo = (godID) =>{
    return Axios.get(`http://localhost:8000/api/godinfo/${godID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

const reset_foryou = () =>{
  return Axios.get('http://localhost:8000/api/reset' )
    .then(resp =>{
        return resp.data;
    })
    .catch(
        err=>{
            return "fail;"
        }
    )
}


const goToFirst = () =>{
  router.push({ name: 'FirstVueComponent' });
}


</script>

  <style>
  .god-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .gods {
    display: flex;
  }

  .god {
    cursor: pointer;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: grey;
  }

  .god img {
    width: 400px;
    height: 400px;
    border-radius: 20%;
  }
  </style>
