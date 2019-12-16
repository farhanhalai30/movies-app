import Axios from "axios";
import querystring from "querystring";

const apiUrl = "http://www.omdbapi.com/";
const apiKey = process.env.API_KEY;

let fetchApi = Axios.create({
  baseURL: apiUrl,
  validateStatus: function(status) {
    return status < 500;
  }
});

let apiHelper = {
  getData(params) {
    params["apikey"] = apiKey;
    return fetchApi
      .get(apiUrl + "?" + querystring.stringify(params))
      .then(response => {
        return response.data;
      });
  }
};

export default apiHelper;
