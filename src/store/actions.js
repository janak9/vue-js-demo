import actionTypes from "./actionTypes"
import axios from '../axios'

export default {
    [actionTypes.REGISTER]: ({ commit }, registerInfo) => {
        return axios().post("/register", registerInfo).then(response => {
            // window.localStorage.auth_token = response.headers.authorization_token;
            commit(actionTypes.LOGIN, { data: response.data, token: response.headers.authorization_token } );
        });
    },

    [actionTypes.LOGIN]: ({ commit }, loginInfo) => {
        return axios().post("/login", loginInfo).then(response => {
            // window.localStorage.auth_token = response.headers.authorization_token;
            commit(actionTypes.LOGIN, { data: response.data, token: response.headers.authorization_token } );
        });
    },

    [actionTypes.GET_USER]: ({ commit }, token) => {
        return axios().get("/user_by_token", { headers: { "auth_token": token } }).then(response => {
            commit(actionTypes.LOGIN, { data: response.data, token: token } );
        });
    },
    
}