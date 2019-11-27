import axios from "axios";
let config = {
  baseURL: "https://hackathon-api-rsxp-2019.herokuapp.com"
};
if (localStorage.getItem("rsxp:token")) {
  config = {
    ...config,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("rsxp:token")
    }
  };
}
const api = axios.create(config);

export default api;
