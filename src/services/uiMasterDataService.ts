import { axiosClientEncoded,axiosClient } from "../http/axios/client"
import {  GET_M_MENU_LIST_DATA } from "../http/endpoints"

export const UiMasterDataService = {
    getMMenuListData : async () => {
        const res = await axiosClient.get(GET_M_MENU_LIST_DATA)
        console.log(res);
        
        return res?.data?.data
    },
}