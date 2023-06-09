import httpClient from "../http-common2";

const getAll = () => {
  return httpClient.get("/alladv");
};

const get = (id) => {
  return httpClient.get(`/getadvs/${id}`);
};

const create = (data) => {
  return httpClient.post("/saveadv", data);
};

const update = (data) => {
  return httpClient.put("/updateadvs", data);
};

const remove = (id) => {
  return httpClient.delete(`/deleteadvs/${id}`);
};

export default { getAll, create, get, update, remove };