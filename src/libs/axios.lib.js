import axios from "axios";

// JWT Error için giriş sayfa yönlendirmesi yapılabilir.
// import router from "./router";

// Global axios defaults
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const DEBUG = process.env.NODE_ENV === "development";

const API_URL = DEBUG ? 'https://api.tfnsoft.com/v1/' : '/';

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'TfnSoft'}
  });

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// instance.defaults.timeout = 2500;



// axios.get("/city-list", { parse: true });
// if (response.config.parse) {

instance.interceptors.request.use((req) => {
    // Do something before request is sent
    // req.headers.authorization = secret token;
    // const accessToken = localStorage.getItem('accessToken');
    // req.headers['token'] = `${localStorage.getItem('token')}`
    // req.headers['content-type'] = 'application/json'
    // req.headers['token'] = `${localStorage.getItem('token')}`
    // req.headers['content-type'] = 'application/json'
    
    // let token = localStorage.getItem("accessToken") || "";
    // config.headers["Authorization"] = `Token ${token}`;

    if (DEBUG) { 
        console.info("✉️ ", req); 
        console.log(`${req.method} ${req.url}`);
        config.time = { startTime: new Date() };
    }
    return req;
  }, (err) => {

    if (DEBUG) { 
        console.error("Req error:", err); 
        // err.response.status === 404
    }
    return Promise.reject(err);
  });

instance.interceptors.response.use((res) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (DEBUG) { 
        console.info("✉️ ", res); 
        
        // res.data.json
        res.config.time.endTime = new Date();
        res.duration = res.config.time.endTime - res.config.time.startTime;
        console.info("Req duration:", res.duration); 
    }

    /*
    if (error.response.status == 401) {
        localStorage.removeItem("accessToken");
        router.push({ name: "login" });
    }
    return Promise.reject(error);
    */

    return res;
  }, (err) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const status = err.response?.status || 500;
    return Promise.reject(err);
  });



export default instance;