import actionTypes from "./actionTypes"

export default {
    [actionTypes.LOGIN]: (state, loginInfo) => {
        console.log("login mutation ", loginInfo);
        window.localStorage.auth_token = loginInfo.token;
        state.auth_token = loginInfo.token;
        state.user = loginInfo.data;
    }
}