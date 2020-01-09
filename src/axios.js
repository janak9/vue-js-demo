import axios from 'axios';

import router from './routes'
import store from './store'
import actionTypes from './store/actionTypes'

export default function() {
    const instance = axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            'auth_token': window.localStorage.auth_token
        }
    });

    instance.interceptors.response.use((response) => {
        return response
    }, (error) => {
        console.log("axios.interceptors");
        if(error.response && error.response.status == 401){
            store.commit(actionTypes.LOGOUT);
            if ( router.currentRoute.name != 'login') {
                router.push({ name: 'login' });
            }
            return Promise.resolve("redirect to login");    
        }
        
        return Promise.reject(error);
    });
    
    return instance;
}
