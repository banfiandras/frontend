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
              <label for="Name">Név</label>
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
              <button type="submit" class="btn btn-primary w-100 py-3 mt-3">Registration</button>
            </div>
          </form>
        </div>
      </div>
  
      <div v-else class="alert alert-success col-12 col-md-6 mx-auto">
        Success!
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import registration from "./registration.js";
  
  
  const regForm = ref({
    Name : '',
    Password: '',
    Confirm_password:'',
    WinCounter: 0,
    Admin: 0
  });
  
  const regSuccess = ref(false);
  const errorMessages = ref({});
  
  function onRegiter(){
    // console.log(regForm.value);
    registration.registerUser(regForm.value)
      .then(()=>{
        regSuccess.value = true;
      })
      .catch(err => {
        // console.log(err.data.data);
        errorMessages.value = err.data.Message;
      })
  }
  </script>
  
  <style lang="scss" scoped></style>