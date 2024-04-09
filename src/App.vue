<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary headline">
      <div class="container-fluid headline">
        <a class="navbar-brand" href="#">God and Prophet</a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Faith point: {{ global.Faith }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Hours: {{ global.Time }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current day: {{ global.Day }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Current energy: {{ global.Sleeep }}</a>
            </li>
          </ul>
          <div v-if="TrueFalse.DataUserLook.value">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Name: {{ userData.Name }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Completed run:{{ userData.WinCon }}</a>
            </li>
          </ul>
          </div>
          <button v-if="TrueFalse.LoginButton.value" @click="pushLogin()" class="btn btn-primary mb-2 menu-side-button ">Login</button>
          <button v-else @click="LogOut()" class="btn btn-primary mb-2 menu-side-button ">Logout</button>
          <button @click="pushRegister()" class="btn btn-primary mb-2 menu-side-button ">Registration</button>
          <button @click="pushAdminLogin()" class="btn btn-primary mb-2 menu-side-button ">AdminLogin</button>
        </div>
      </div>
    </nav>

    

    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useFaithStore, useHelperStore, useUserStore, useTrueFalseStore } from './stores/store.js';
import { storeToRefs } from 'pinia';
import { currentDay,currentEnergy,currentFaithPoints,currentTime } from '../src/components/Header';
import { endOFDay } from './npcs/npc.js';

const global = storeToRefs(useFaithStore());
console.log(global.Day.value);
const isDataLoaded = ref(false);
const router = useRouter();
const helper = storeToRefs(useHelperStore());
const userData = storeToRefs(useUserStore());
const TrueFalse = storeToRefs(useTrueFalseStore());


const fetchData = async () => {
   global.Day.value = await currentDay(); 
   global.Faith.value = await currentFaithPoints();
   global.Time.value = await currentTime(); 
   global.Sleeep.value = await currentEnergy();
};

const pushRegister = () =>{
  router.push({ name: 'registration' });
}

const pushLogin = () =>{
  router.push({ name: 'login' });
}

const pushAdminLogin = () =>{
  router.push({ name: 'adminLogin' });
}

const LogOut = () =>{

  logOut().then(resp=>{
    router.push({ name: 'registration' });
  });
  LoginHelper();
}

const LoginHelper = () =>{
  loginData().then(resp =>{
        console.log(resp);
        userData.Name = resp[0];
        console.log(userData.Name);
        userData.WinCon = resp[1];
        console.log(userData.WinCon);
      if (resp[0] !== null) {
        TrueFalse.DataUserLook.value = true;
        TrueFalse.LoginButton.value = false;
        console.log("Login helper true",TrueFalse.LoginButton.value,TrueFalse.DataUserLook.value );
        
      } else {
        TrueFalse.DataUserLook.value =false;
        TrueFalse.LoginButton.value = true;
        console.log("LoginhelperFalse",TrueFalse.LoginButton.value,TrueFalse.DataUserLook.value );
        console.log("rip");
      }

    })
}

onMounted(async () => {
  try {
    console.log('onMounted');
    await fetchData();
    isDataLoaded.value = true;
    console.log("onMounted LoginHelper elott",TrueFalse.LoginButton.value,TrueFalse.DataUserLook.value );
    LoginHelper();
    console.log("onMounted LoginHelper utan",TrueFalse.LoginButton.value,TrueFalse.DataUserLook.value );
  } catch(error) {
    console.error('Error fetching data:', error);
  }
});

watch(() => helper.Helper.value, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    await fetchData();
    await endOFDay();
    fetchData();
    console.log("gay");
    console.log(helper.Helper.value);
  }
});



watch(() => userData.Name.value, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    LoginHelper();
  }
});



//--------------------------------- DATASERVICE -------------------------------
const loginData=()=>{
    return axios.get(`http://localhost:8000/api/loginData`) 
    .then(resp=>{
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

const logOut=()=>{
    return axios.get(`http://localhost:8000/api/logOut`) 
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
