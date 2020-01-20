import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/parlors/";

export const getTopParlors = () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
};

export const getParlorDetails = id => {
  let url = baseUrl + id;
  return fetch(url)
    .then(handleResponse)
    .catch(handleError);
};
