import axios from "axios";
// import {cacheAdapterEnhancer} from 'axios-extensions'
// import {
//   cacheAdapterEnhancer,
//   throttleAdapterEnhancer,
// } from "axios-extensions";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
//   headers: { "Cache-Control": "no-cache" },
//   // cache will be enabled by default
//   adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});