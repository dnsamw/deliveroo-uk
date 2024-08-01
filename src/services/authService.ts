import axios from "axios";
import { axiosClientEncoded } from "../http/axios/client";
import { GET_SERVER_TIME, GET_USER_CREDENTIALS } from "../http/endpoints";

export const AuthService = {
  getUserCredentials: async (data: any) => {
    //  return DUMMY_RES.data
    const res = await axiosClientEncoded.post(GET_USER_CREDENTIALS, data);
    return res?.data?.data;
  },

  getServerTime: async () => {
    const res = await axios(GET_SERVER_TIME);
    return res?.data;
  },
};
