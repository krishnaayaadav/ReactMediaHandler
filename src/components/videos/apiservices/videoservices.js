
import axios from "axios";

const base_url = 'http://127.0.0.1:8000/api';


function videoSerivices(){
   return axios({
      method: 'GET',
      url: base_url + '/videos'
   })
};

export {
   videoSerivices
}