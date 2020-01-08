import actionTypes from "./actionTypes"

export default {
    [actionTypes.LOGIN]: (state, loginInfo) => {
        window.localStorage.auth_token = loginInfo.token;
        state.auth_token = loginInfo.token;
        state.user = loginInfo.data;
    },

    [actionTypes.LOGOUT]: (state) => {
        window.localStorage.auth_token = "";
        state.auth_token = "";
        state.user = "";
    }
}