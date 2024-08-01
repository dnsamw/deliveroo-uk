import momentTz from "moment-timezone";
import { AnyAction, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { AuthService } from "../../services/authService";
import { GET_SERVER_TIME } from "../../http/endpoints";
import { BrowserStorage, StorageTypes } from "../../browserStorage";
import { StorageFields } from "../../browserStorage/storageConfig";
import Config from "../../Config";
import { setAuthUser } from "../reducers/authSlice";

const saveOauthCredentials = ({ oauthCredentials }: { oauthCredentials: any }) => {
    BrowserStorage.addItemToStorage({
      key: StorageFields.CREDENTIALS,
      value: JSON.stringify(oauthCredentials),
      storageType: StorageTypes.LOCAL,
    });
  };

export const getUserCredentials = createAsyncThunk(
    "get-user-credentials",
    async (data: any, { rejectWithValue, dispatch, getState }) => {
      try {
        const res = await AuthService.getUserCredentials(data);
        const serverTime = await dispatch(getServerTime(null)).unwrap()

        saveOauthCredentials({ oauthCredentials: res.oauthCredentials });

        BrowserStorage.addItemToStorage({
          key: StorageFields.LOGGED_IN_AT_TIMESTAMP,
            // value: new Date().getTime().toString(),
            value: momentTz.tz(serverTime, "Asia/Colombo").valueOf().toString()
        });
  
        if (res.status && res.status === Config.errorCodes.OTPID_NOT_FOUND) {
          dispatch(
            // setAuthUser({ ...res?.jLeagueUserCredentials, isLoggedIn: true })
            setAuthUser({
              ...res?.jLeagueUserCredentials,
              otpidInputRequired: true,
              isLoggedIn: true,
            })
          );
          return Config.errorCodes.OTPID_NOT_FOUND;
        }
        dispatchCommonLogin(dispatch, res, getState);
        return Config.successCode;
      } catch (err: any) {
        // * Also send oauthCredentials with the error response
        const errResData = err?.response?.data?.data;
        saveOauthCredentials({ oauthCredentials: errResData?.oauthCredentials });
        return rejectWithValue(errResData?.errorMessage);
      }
    }
  );

  export const getServerTime = createAsyncThunk(
    GET_SERVER_TIME,
    async (data: null, { rejectWithValue, fulfillWithValue, dispatch }) => {
        try {
            const res = await AuthService.getServerTime();
            const serverTime = res?.["Asia/Colombo"]
            return fulfillWithValue(serverTime);
        } catch (err: any) {
            return rejectWithValue(err);
        }
    }
);


export const dispatchCommonLogin = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>, res: any, getState: any) => {
    const state = getState();
    dispatch(
      setAuthUser({
        // other properties
        isLoggedIn: true,
      })
    );
  };