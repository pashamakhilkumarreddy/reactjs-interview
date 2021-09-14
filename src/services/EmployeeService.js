import Api from "./Api";

export default {
  fetchEmployees({ start = 0, limit = 10 } = {}) {
    return Api().get(`users?_start=${start}&_limit=${limit}`);
  },
  fetchEmployeeProfilePics({ start = 0, limit = 10 } = {}) {
    return Api().get(`photos?_start=${start}&_limit=${limit}`);
  },
};
