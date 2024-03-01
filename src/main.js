import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import './app.css';

const app = createApp(App);

app.config.globalProperties.$AppDay;
app.config.globalProperties.$AppFaith;
app.config.globalProperties.$AppTime;

app.use(router);

app.mount('#app');