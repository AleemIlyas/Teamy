import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://teamybackendaleemilyas.azurewebsites.net/'
})


export default axiosInstance