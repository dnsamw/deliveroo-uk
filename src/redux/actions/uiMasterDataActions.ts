import { createAsyncThunk } from "@reduxjs/toolkit";
import Config from "../../Config";
import {   GET_M_MENU_LIST_DATA,  } from "../../http/endpoints";
import { UiMasterDataService } from "../../services/uiMasterDataService";

// ! fetch all the data that requires before login
// export const getUiMasterData = createAsyncThunk(
//     'get-ui-master-data',
//     async (data:any, {dispatch, rejectWithValue}) => {
//         try {
//             // const res = await UiMasterDataService.getMSiteEntryData()
//             // return res
//             const [mSiteEntryData] = await Promise.all([
//                 UiMasterDataService.getMSiteEntryData(data),
//             ])

//             const clubName = mSiteEntryData?.m_club_data?.club_name
//             const headerTitle = mSiteEntryData?.m_entry_site_data?.header_title

//             const metaDescription = `${clubName} | ${headerTitle} | 入会お申込みサイトです。`

//             document.title = `${clubName} | ${headerTitle}`

//             // @ts-ignore
//             document.querySelector('meta[name="description"]').setAttribute("content", metaDescription);

//             var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//             // @ts-ignore
//             link.type = 'image/x-icon';
//             // @ts-ignore
//             link.rel = 'shortcut icon';
//             // @ts-ignore
//             link.href = `https://fepd.s3.ap-northeast-1.amazonaws.com/img/fep/${Config.getEntrySiteCode()}/favicon.ico`;
//             document.getElementsByTagName('head')[0].appendChild(link);

//             return {
//                 mSiteEntryData,
//             }
//         } catch (err){
//             rejectWithValue(err)
//         }
//     }

// )

export const getMMenuListData = createAsyncThunk(
    GET_M_MENU_LIST_DATA,
    async (_, {rejectWithValue}) => {
        try {
            const res = await UiMasterDataService.getMMenuListData()
            return res
        } catch (err){
            rejectWithValue(err)
        }
    }

)



