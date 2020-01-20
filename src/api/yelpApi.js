import axios from "axios";

const apiKey =
  "l7-8Kgt0a-mQ4MRnPYc7mXkuun6tNqmaYBGt7aoyDbOx0_LEuVuLgIcnE0xN_JMNhrH2XN2cUfwqlmhJ2BccoV1_A8pmYdTSoQcQ1lRbnOrNDk3gS1psFoh6I-kkXnYx";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3",
  headers: {
    Authorization: "Bearer " + apiKey
  }
});
