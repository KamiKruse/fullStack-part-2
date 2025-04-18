import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getReq = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const postReq = (obj) => {
  const request = axios.post(baseUrl, obj);
  return request.then((response) => response.data);
};

const delReq = (id)=>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(() => id);
}

const updateReq = (id, obj)=>{
    const request = axios.put(`${baseUrl}/${id}`, obj);
    return request.then(response => response.data)
}

export default {
  getReq,
  postReq,
  delReq,
  updateReq
};
