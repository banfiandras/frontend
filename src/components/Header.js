import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export const currentDay=()=>{
    return axios.get(`http://localhost:8000/api/currentDay`)
    .then(resp=>{
        return console.log("done!");
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}