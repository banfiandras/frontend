import { createRouter, createWebHistory } from 'vue-router';
import Fields from '../components/fields.vue';
import Forest from '../components/forest.vue';
import Military from '../components/military.vue';
import Temple from '../components/temple.vue';
import Town from '../components/town.vue';
import FirstVueComponent from'../components/FirstVueComponent.vue';
import Banker from '../npcs/banker.vue';
import Blacksmith from '../npcs/blacksmith.vue';
import Hunter from '../npcs/hunter.vue';
import Lord from '../npcs/lord.vue';
import Peasant from '../npcs/peasant.vue';
import Soldier from '../npcs/soldier.vue';
import Wanderer from '../npcs/wanderer.vue';
import Warlord from '../npcs/warlord.vue';
import Start from '../components/start.vue';
import Registration from "../components/Registration.vue";

const routes = [

  { path: '/', redirect: '/start' },
  { path: '/start', name: 'start', component: Start },
  { path: '/registration', name: 'registration', component: Registration},
  { path: '/FirstVueComponent', name: 'FirstVueComponent', component: FirstVueComponent },
  { path: '/fields', name: 'fields', component: Fields },
  { path: '/forest', name: 'forest', component: Forest },
  { path: '/military', name: 'military', component: Military },
  { path: '/temple', name: 'temple', component: Temple },
  { path: '/town', name: 'town', component: Town },
  { path: '/banker', name: 'banker', component: Banker},
  { path: '/blacksmith', name: 'blacksmith', component: Blacksmith},
  { path: '/hunter', name: 'hunter', component: Hunter},
  { path: '/lord', name: 'lord', component: Lord},
  { path: '/peasant', name: 'peasant', component: Peasant},
  { path: '/soldier', name: 'soldier', component: Soldier},
  { path: '/wanderer', name: 'wanderer', component: Wanderer},
  { path: '/warlord', name: 'warlord', component: Warlord},
];
console.log('ok');

const baseURL = import.meta.env.VUE_APP_BASE_URL || '/';
const router = createRouter({
  history: createWebHistory(baseURL),
  routes,
});
export default router;
