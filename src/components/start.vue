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
    <div class="god-selection">
      <div>
      <h1>Story</h1>
      <div class="god">
        <p>
          Once upon a time, there was a man, who never lisened to the greek gods, he never obeyed Zeus's will. One day he made a mistake, he caused such a blaspemy that even the gods could't forgive. 
          <br> Zeus diceded that not only the man, but the human race as a hole should die in the most horrible way.
          <br> Luckly there was three gods who liked the humans. They defended them and beged for forgivness. Zeuse gave 100 days for these gods, they had this time to prove Zeus wrong. 
          <br> The three gods chose a good man among others and gave him a duty. If he could make his people belive in one of the three gods they can defend there race.
          <br> The choosen man could choose his own god as a helper. <br>
          Choose youre protector wisely brave human!
        </p>
      </div>
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
