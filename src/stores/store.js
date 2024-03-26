import { defineStore } from 'pinia';

export const useFaithStore = defineStore('FaithStore', {
    state: () => {
      return { 
        Faith: 0,
        Time: 0,
        Day: 0,
        Sleeep: 0
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })

  export const useHelperStore = defineStore('HelperStore', {
    state: () => {
      return { 
        Helper: 0
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })

  export const useUserStore = defineStore('UserStore', {
    state: () => {
      return { 
        Name: null,
        WinCon: 0
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })

  export const useTrueFalseStore = defineStore('TrueFalseStore', {
    state: () => {
      return { 
        LoginButton: true,
        DataUserLook: false
    }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      
    },
  })

  