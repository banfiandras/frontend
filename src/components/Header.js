import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';


//---------------------------------- CODE -------------------------------------


// export async function UpdateHeaderDay() {
//     global.Day = await currentDay(); //   :D
// }

// export async function UpdateHeaderFaithPoint() {
//     global.Faith = await currentFaithPoints(); //   :D;
// }

// export async function UpdateHeaderTime() {
//     global.Time = await currentTime(); //   :D
// }

// export async function UpdateEnergy() {
//     global.Sleeep
// }





//---------------------------------- DATASERVICE -------------------------------------

export const currentDay=()=>{
    return axios.get(`http://localhost:8000/api/currentDay`)
    .then(resp=>{
        return resp.data;
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
        return resp.data;
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
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const currentEnergy=()=>{
    return axios.get(`http://localhost:8000/api/currentEnergy`)
    .then(resp=>{
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const selectMapGodAbs = (godId) =>{
    return axios.get(`http://localhost:8000/api/selectMapGodAb/${godId}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const teleport = () =>{
    return axios.get(`http://localhost:8000/api/teleport`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const teleport2 = () =>{
    return axios.get(`http://localhost:8000/api/teleport2`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const hermesMap = () =>{
    return axios.get(`http://localhost:8000/api/MapHermes`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}