import { defineStore } from 'pinia';

export const useFaithStore = defineStore('FaithStore', {
    state: () => {
      return { 
        Faith: 0,
        Time: 0,
        Day: 0
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })