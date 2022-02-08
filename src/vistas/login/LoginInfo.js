import axios from 'axios';

let base_url = 'http://localhost/Login/iniciarSesion';

const login = async credentials => {
    const {data} = await axios.post(base_url, credentials)
    return data;
}


export default {login};
