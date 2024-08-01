import axios from "axios";
import { Base64 } from "js-base64";
import { BrowserStorage } from "../../browserStorage";
import { StorageFields } from "../../browserStorage/storageConfig";
import Config from "../../Config";
import { BACKEND_API_ENDPOINT } from "../endpoints";
var CryptoJS = require("crypto-js");

const request_url = window.location.href;

const getClientIp = () => {
  return Base64.encode(
    Base64.encode(
      BrowserStorage.getEncryptedItemFromStorage({
        key: StorageFields.CLIENT_IP,
      })
    )
  );
};

const axiosConfig = {
  baseURL: BACKEND_API_ENDPOINT,
  headers: {
    "CLIENT-IP": getClientIp(),
    "REQUEST-URL": request_url,
  },
};

const appendix = {
  key: process.env.REACT_APP_CRYPTO_JS_APPENDIX_KEY,
  value: process.env.REACT_APP_CRYPTO_JS_APPENDIX_VALUE,
};

const axiosConfigEncoded = {
  baseURL: axiosConfig.baseURL,
  headers: {
    ...axiosConfig.headers,
    [CryptoJS.MD5(appendix.key)]: CryptoJS.SHA1(appendix.value),
  },

  transformRequest: [
    function (data: any, headers: any) {
      data = Base64.encode(JSON.stringify(data));
      return data;
    },
    // @ts-ignore
    ...axios.defaults.transformRequest,
  ],
  transformResponse: [
    function (data: any) {
      // console.log(data);

      data = JSON.parse(data);
      data["data"] = JSON.parse(Base64.decode(data.data));
      // console.log(data);

      return data;
    },
    // @ts-ignore
    ...axios.defaults.transformResponse,
  ],
};

export const axiosClient = axios.create(axiosConfig);
export const axiosClientEncoded = axios.create(
  Config.encodeRequests ? axiosConfigEncoded : axiosConfig
);
