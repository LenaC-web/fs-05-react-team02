import { instance } from "./axiosInstance";

export const getRandomQuoteAPI = async () => {
  try {
    const response = await instance.get("/random/ho");
    console.log(response.data.sentence);
    return response.data.sentence;
  } catch (err) {
    console.log("error: ", err);
  }
};
