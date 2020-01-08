export default (to, from, next) => {
    console.log("auth middleware");
    console.log(to);
    console.log(from);
    if(! window.localStorage.auth_token){
        next({ name: "login" });
    }else{
        next();
    }
}