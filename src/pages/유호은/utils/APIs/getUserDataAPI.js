import { instance } from "./axiosInstance";

export const getUserDataAPI = async () => {
  try {
    const response = await instance.get("/user-info");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log("error: ", err);
  }
};
