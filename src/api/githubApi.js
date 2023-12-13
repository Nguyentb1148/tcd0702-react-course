import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});

const searchUsers = (text) => {
  return axiosClient.get(`/search/users?q=${text}`);
};

const getUser = (login) => {
  return axiosClient.get(`/users/${login}`);
};

export { getUser, searchUsers };
