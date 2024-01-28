import Axios from './dataservice.js';

export default{
    selectGod(){
        return Axios.get('/GodSelection')
        .then(resp=>{
            return resp.data;
        })
        .catch(err=>{
            return Promise.reject(err.response);
        })
    },

    getLastUserWithGod(){
        return Axios.get('/GodSelection')
        .then(resp=> {
            return resp.data;
        })
        .catch(err=>{
            return Promise.reject(err.response);
        })
    }
}