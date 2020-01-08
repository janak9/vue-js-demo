export default (to, from, next) => {
    console.log("auth middleware");
    if(! window.localStorage.auth_token){
        next({ name: "login" });
    }else{
        next();
    }
}