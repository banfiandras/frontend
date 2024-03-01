import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Current from './variable';


//---------------------------------- CODE -------------------------------------


export async function UpdateHeaderDay() {
    Current.Day = await currentDay(); //   :D
}

export async function UpdateHeaderFaithPoint() {
    Current.Faith = await currentFaithPoints(); //   :D;
}

export async function UpdateHeaderTime() {
    Current.Time = await currentTime(); //   :D
}





//---------------------------------- DATASERVICE -------------------------------------

export const currentDay=()=>{
    return axios.get(`http://localhost:8000/api/currentDay`)
    .then(resp=>{
        return resp;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const currentFaithPoints=()=>{
    return axios.get(`http://localhost:8000/api/currentFaithPoints`)
    .then(resp=>{
        return resp;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const currentTime=()=>{
    return axios.get(`http://localhost:8000/api/currentTime`)
    .then(resp=>{
        return resp;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}