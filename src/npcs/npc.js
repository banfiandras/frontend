import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export const help1 = (npcID) => {
    return axios.get(`http://localhost:8000/api/help1/${npcID}`)
    .then(resp=>{
        return console.log("Help1 done!");
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const help2 = (npcID) => {
    return axios.get(`http://localhost:8000/api/help2/${npcID}`)
    .then(resp=>{
        return console.log("Help2 done!");
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const NPCCheck = (npcID) =>{
    return axios.get(`http://localhost:8000/api/NpcChech/${npcID}`)
    .then(resp=>{
        return resp;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}