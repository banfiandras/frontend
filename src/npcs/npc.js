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

export const CurrentFaith = (npcID) =>{
    return axios.get(`http://localhost:8000/api/CurrentFaith/${npcID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const talkedTo = (npcID) =>{
    return axios.get(`http://localhost:8000/api/talkedTo/${npcID}`)
    .then(resp=>{   
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const endOFDay = () =>{
    return axios.get(`http://localhost:8000/api/endOfDay`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const noMorehelp = (npcID) =>{
    return axios.get(`http://localhost:8000/api/noMoreHelp/${npcID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const selectGodAbs = (godId) =>{
    return axios.get(`http://localhost:8000/api/selectGodAb/${godId}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const GetGodAb = (abID) =>{
    return axios.get(`http://localhost:8000/api/GetGodAb/${abID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const GetGood = ($userID) =>{
    return axios.get(`http://localhost:8000/api/GetGood/1`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const GetGodAbName = (abID) =>{
    return axios.get(`http://localhost:8000/api/AbName/${abID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const GetGodAbCost = (abID) =>{
    return axios.get(`http://localhost:8000/api/AbCost/${abID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const GetGodAbDescription = (abID) =>{
    return axios.get(`http://localhost:8000/api/AbDescription/${abID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const winCon = () =>{
    return axios.get(`http://localhost:8000/api/winCon`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

export const talkAbility = (npcID) =>{
    return axios.get(`http://localhost:8000/api/talkAbility/${npcID}`)
    .then(resp=>{
        
        return resp.data;
    })
    .catch(
        err=>{
            return console.log("fail");
        }
    )
}

