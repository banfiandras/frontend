import Axios from './dataservice.js';

export default{
    GodInfo(data) {
        return Axios.post('/GodInfo', data)
        .then(resp => {
            return resp;
        })
        .catch(err=>{
            return Promise.reject(err.response);
        })

    }

}