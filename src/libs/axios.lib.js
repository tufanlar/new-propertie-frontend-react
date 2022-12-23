import axios from "axios";


// Global axios defaults
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const DEBUG = process.env.NODE_ENV === "development";
const API_URL = DEBUG ? 'https://api.tfnsoft.com/v1' : 'https://api.tfnsoft.com/v1';


const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'TfnSoft'}
  });

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// instance.defaults.timeout = 2500;

instance.interceptors.request.use((req) => {
    // Do something before request is sent
    // req.headers.authorization = secret token;
    // const accessToken = localStorage.getItem('accessToken');
    // req.headers['token'] = `${localStorage.getItem('token')}`
    req.headers['content-type'] = 'application/json'
    // req.headers['Access-Control-Allow-Origin'] = '*';
    //  let headers = { 'Authorization': 'Bearer ' + userObject.accessToken }
    // req.headers['token'] = `${localStorage.getItem('token')}`
    // req.headers['content-type'] = 'application/json'
    
    // let token = localStorage.getItem("accessToken") || "";
    // config.headers["Authorization"] = `Token ${token}`;
    // config.headers["Authorization"] = `Bearer ${token}`;

    if (DEBUG) { 
        console.info("✉️ ", req); 
        console.log(`${req.method} ${req.url}`);
        req.time = { startTime: new Date() };
    }
    return req;
  }, (err) => {

    if (DEBUG) { 
        console.error("Req error:", err); 
    }

    return Promise.reject(err);
  });

instance.interceptors.response.use((res) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (DEBUG) { 
        console.info("✉️ ", res); 
        res.config.time.endTime = new Date();
        res.duration = res.config.time.endTime - res.config.time.startTime;
        console.info("Req duration:", res.duration);
        console.info("Res data-1:", res.data);

    }

    if (res.data.hasOwnProperty('isError')) {
      console.info("Res error:", res.data.message);
      throw new Error(res.data.message)

    } else {
      console.info("Res data:", res.data);
    }


    return res;

  }, (err) => {
    
    console.log("Backend response error", err);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const status = err.response?.status || 500;
    return Promise.reject(err);
  });



export default instance;