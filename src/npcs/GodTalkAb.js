import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';



    export const convertHermes=(npcID)=>{
        return axios.get(`http://localhost:8000/api/convert-hermes/${npcID}`)
        .then(resp=>{
            return console.log("done!");
        })
        .catch(
            err=>{
                return console.log("fail");
            }
        )
    }

    export const convertDemeter = (npcID)=>{
        return axios.get(`http://localhost:8000/api/convert-demeter/${npcID}`)
        .then(resp=>{
            return console.log("done!");
        })
        .catch(
            err=>{
                return console.log("fail");
            }
        )
    }

    export const convertAres = (npcID) => {
        return axios.get(`http://localhost:8000/api/convert-ares/${npcID}`)
        .then(resp=>{
            return console.log("done!");
        })
        .catch(
            err=>{
                return console.log("fail");
            }
        )
    }

