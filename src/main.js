import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './app.css';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);
app.use(createPinia());


app.mount('#app');