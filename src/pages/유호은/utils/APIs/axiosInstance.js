import axios from "axios";

const BASE_URL = "https://local-ke-sam.topikon.info/sprint5";

const instances = {};

/** 인스턴스 생성 함수*/
async function createAxiosInstance(baseURL) {
  if (!instances[baseURL]) {
    const axiosInstance = axiosDefault(baseURL);
    requestInterceptor(axiosInstance);
    responseInterceptor(axiosInstance);
    instances[baseURL] = axiosInstance;
  }
  return instances[baseURL];
}

/** 기본 설정 */
function axiosDefault(baseURL) {
  return axios.create({
    baseURL,
    timeout: 10000,
  });
}

//TODO: 토큰 로컬스토리지에서 받아오는 부분 주석처리하고 일단은 내 토큰으로 넣어둔 상태 -> 나중에 로컬스토리지 코드 추가.
/** 요청 인터셉터 */
function requestInterceptor(instance) {
  instance.interceptors.request.use(
    (config) => {
      // const token = localStorage.getItem("authToken");
      const token = "6fc101e4-f2e7-4608-897f-422317f37363";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log("Request:", config);
      return config;
    },
    (error) => {
      console.error("Request Error:", error);
      return Promise.reject(error);
    }
  );
}

/** 응답 인터셉터 */
function responseInterceptor(instance) {
  instance.interceptors.response.use(
    (response) => {
      console.log("Response Data:", response.data);
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 400) {
        console.log(error.message);
      }
      return Promise.reject(error);
    }
  );
}

//인스턴스 생성 및 export
export const instance = await createAxiosInstance(BASE_URL);
