<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="display-4 text-center my-5">Registration</h1>
        </div>
      </div>
      <div class="row" v-if="!regSuccess">
        <div class="col-12 col-md-4 mx-auto">
          <form @submit.prevent="onRegiter">
            <div class="form-floating mb-3">
              <input 
                type="text" 
                class="form-control" 
                :class="{'is-invalid' : errorMessages.Name}"
                id="name" 
                placeholder="Name" 
                v-model="regForm.Name">
              <label for="Name">Name</label>
              <div v-if="errorMessages.Name">
                <span v-for="m in errorMessages.Name" class="error-message">{{ m }} <br/></span>
              </div>
            </div>
  
            <div class="form-floating mb-3">
              <input 
                type="password" 
                class="form-control" 
                :class="{'is-invalid' : errorMessages.Password}"
                id="password" 
                placeholder="Password"
                v-model="regForm.Password">
              <label for="password">Password</label>
              <div v-if="errorMessages.Password">
                <span v-for="m in errorMessages.Password" class="error-message">{{ m }} <br/></span>
              </div>
            </div>
  
            <div class="form-floating mb-3">
              <input 
                type="password" 
                class="form-control" 
                :class="{'is-invalid' : errorMessages.Confirm_password}"
                id="password_confirmation" 
                placeholder="Password again"
                v-model="regForm.Confirm_password">
              <label for="password_confirmation">Password again</label>
              <div v-if="errorMessages.Confirm_password">
                <span v-for="m in errorMessages.Confirm_password" class="error-message">{{ m }} <br/></span>
              </div>
            </div>
  
            <div class="mb-3">
              <button type="submit" class="btn btn-primary mb-2 menu-side-button col-12" >Registration</button>
            </div>
          </form>
        </div>
      </div>
  
      <div v-else class="row">
        <div class="col-12 col-md-4 mx-auto">
            <div class="alert alert-success col-12 col-md-6 mx-auto">Success!</div>
            <div>
              <button @click="pushPlay()" class="btn btn-primary mb-2 menu-side-button col-12">Play!</button>
           </div>
        </div>
        
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import registration from "./registration.js";
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { useFaithStore, useHelperStore, useUserStore, useTrueFalseStore } from '../stores/store.js';
  import { storeToRefs } from 'pinia';
  

  const userData = storeToRefs(useUserStore());
  const TrueFalse = storeToRefs(useTrueFalseStore());
  
  const regForm = ref({
    Name : '',
    Password: '',
    Confirm_password:'',
    WinCounter: 0
  });
  
  const regSuccess = ref(false);
  const errorMessages = ref({});
  
  function onRegiter(){
    // console.log(regForm.value);
    registration.registerUser(regForm.value)
      .then(()=>{
        regSuccess.value = true;
        LoginHelper();
      })
      .catch(err => {
        // console.log(err.data.data);
        errorMessages.value = err.data.Message;
      })
      
  }
  const router = useRouter();
  const pushPlay = () =>{
    router.push({ name: 'start' });
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
  </script>
  
  <style lang="scss" scoped></style>