<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-4 text-center my-5">Bejelentkezés</h1>
      </div>
      <div class="col-12 col-md-4 mx-auto">
        <form @submit.prevent="onLogin">
          <div class="form-floating mb-3">
            <input 
                type="text" 
                class="form-control" 
                id="name" 
                placeholder="Name" 
                v-model="loginForm.Name">
              <label for="Name">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input 
                type="password" 
                class="form-control" 
                id="password" 
                placeholder="Password"
                v-model="loginForm.Password">
              <label for="password">Password</label>
          </div>

          <div class="mb-3">
            <button @click="LoginComp(loginForm)"class="btn btn-primary w-100 py-3 mt-3">Login</button>
          </div>
      </form>

      <div class="alert alert-danger" v-if="f">
        {{ err }}
      </div>

      

    </div>
  </div>
</div></template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import login from "../components/login";
import { useUserStore } from '../stores/store';
import { storeToRefs } from 'pinia';

const router = useRouter();
const f = ref(false);
const err = ref("Failed login!");
const loginForm = ref({});
const userData = storeToRefs(useUserStore());

async function LoginComp(data) {
  login.login(data).then(resp=>{
    if (resp.status == 200 && resp.data !=201) {
      f.value = false;
      console.log("k");
      
      router.push({name: 'start'})
    }
    else{
      f.value = true;
    }
  });
  
}

</script>

<style lang="scss" scoped></style>