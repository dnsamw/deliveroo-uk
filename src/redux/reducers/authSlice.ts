import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrowserStorage } from "../../browserStorage";
import { StorageFields } from "../../browserStorage/storageConfig";
import { getServerTime, getUserCredentials } from "../actions/authActions";

export interface AuthUserCredentials {
    isLoggedIn: boolean;
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    postalCode?: string;
    sex?: string;
    confirmed?: {
        userinfo?: boolean;
      };
  }
  
export interface StaffUser {
    restaurantStaffUser: boolean;
    isLoggedIn: boolean;
  }
export interface AuthSlice {
    loading: boolean;
    authUser: AuthUserCredentials | null;
    restaurantStaffUser: StaffUser | null;
    globalErrorMessage?: string;
    globalLoading?: boolean;
    dataFetchInProgress?: boolean;
    client_ip?: string;
    hasClickedConfirmButton: boolean;
    confirmPageRefreshCount: number;
    serverTime?:any
  }

  const initialState: AuthSlice = {
    loading: true,
    authUser: null,
    restaurantStaffUser: null,
    hasClickedConfirmButton: false,
    confirmPageRefreshCount: 0,
  };

  export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
      setAuthUser: (state, action: PayloadAction<AuthUserCredentials | null>) => {
        state.authUser = action.payload;
        BrowserStorage.addItemToStorage({
          key: StorageFields.USER_ID,
          value: action.payload?.id || "",
        });
      },
  
      setStaffUser(state, { payload }) {
        state.restaurantStaffUser = payload;
      },
  
      confirmMainUserData: (
        state,
        action: PayloadAction<"userinfo">
      ) => {
        state.authUser!.confirmed = {
          ...state.authUser?.confirmed,
          [action.payload]: true,
        };
      },
  
      unConfirmMainUserData: (
        state,
        action: PayloadAction<"userinfo">
      ) => {
        state.authUser!.confirmed = {
          ...state.authUser?.confirmed,
          [action.payload]: false,
        };
      },
  
      setGlobalErrorMessage: (state, { payload }) => {
        state.globalErrorMessage = payload;
      },
  
      setGlobalLoading: (state, { payload }) => {
        state.globalLoading = payload;
      },
  
      setDataFetchInProgress: (state, { payload }) => {
        state.dataFetchInProgress = payload;
      },
  
      removeAllMainUserconfirms: (
        state,
        action: PayloadAction<{ keepBasicInfoConfirmed: boolean }>
      ) => {
        let obj = {};
        if (action.payload.keepBasicInfoConfirmed) {
          obj = { userinfo: true };
        }
        state.authUser!.confirmed = obj;
      },
  
      setClientIp: (state, { payload }) => {
        state.client_ip = payload;
      },
  
      setHasClickedConfirmButton: (state, {payload}) => {
        state.hasClickedConfirmButton = payload;
      },
      setConfirmPageRefreshCount: (state, { payload }) => {
        state.confirmPageRefreshCount = payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(getUserCredentials.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getUserCredentials.rejected, (state, action) => {
        state.loading = false;
      });
      builder.addCase(getUserCredentials.fulfilled, (state, action) => {
        state.loading = false;
      });
  
  
      // * get server time
      builder.addCase(getServerTime.pending, (state, action) => {
        state.loading = false;
      });
      builder.addCase(getServerTime.fulfilled, (state, action) => {
        state.loading = false;
        state.serverTime = action.payload
      });
      builder.addCase(getServerTime.rejected, (state, action) => {
        state.loading = false;
      });
    },
  });

  export const {
    setAuthUser,
    setStaffUser,
    confirmMainUserData,
    setGlobalErrorMessage,
    removeAllMainUserconfirms,
    unConfirmMainUserData,
    setGlobalLoading,
    setDataFetchInProgress,
    setClientIp,
    setHasClickedConfirmButton,
    setConfirmPageRefreshCount,
  } = authSlice.actions;
  
  export default authSlice.reducer;