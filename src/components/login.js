import axios from 'axios';

export default{
    login(data){
        return axios.post('http://127.0.0.1:8000/api/login', data)
          .then(resp => {
            console.log(resp);
            return resp;
          })
          .catch(err => {
            return Promise.reject(err.response);
          })
      }
}
