import httpClient from "../http-commons3";


const login = (loginUser) => {
    console.log(loginUser)
    return httpClient.get("/login",loginUser);
    
  };

  export default { login };
