import { createSlice } from "@reduxjs/toolkit";
import {
  // getFanclubReceptionData,
  getMMenuListData,
  // getUiMasterData,
} from "../actions/uiMasterDataActions";

export interface UiMasterDataSlice {
  loading: boolean;
  mMenuListData: any;
  selectedButton: any;
  innerWidth?: number;
}

const initialState: UiMasterDataSlice = {
  loading: false,
  mMenuListData: null,
  selectedButton: null,
};

export const uiMasterDataSlice = createSlice({
  name: "uiMasterDataSlice",
  initialState,
  reducers: {
    setSelectedButton: (state, action: any) => {
      state.selectedButton = action.payload;
    },
    setInnerWidth: (state, { payload }) => {
      state.innerWidth = payload;
    },
  },
  extraReducers: (builder) => {
    // * get ui master data - all data required before login
    // builder.addCase(getUiMasterData.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getUiMasterData.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.mSiteEntryData = action.payload?.mSiteEntryData?.m_entry_site_data;
    //   state.mClubData = action.payload?.mSiteEntryData?.m_club_data;
    // });
    // builder.addCase(getUiMasterData.rejected, (state, action) => {
    //   state.loading = false;
    // });

    // *  m menu list data
    builder.addCase(getMMenuListData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMMenuListData.fulfilled, (state, action) => {
      state.loading = false;
      state.mMenuListData = action.payload;
    });
    builder.addCase(getMMenuListData.rejected, (state, action) => {
      state.loading = false;
    });


    // builder.addCase(getFanclubReceptionData.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(getFanclubReceptionData.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.fcEnrollmentInfo = action.payload?.fcEnrollmentInfo;
    //   state.commonOptions = action.payload?.commonOptions;
    //   state.ssEnrollmentInfo = action.payload?.ssEnrollmentInfo;
    // });
    // builder.addCase(getFanclubReceptionData.rejected, (state, action) => {
    //   state.loading = false;
    // });
  },
});

export const {
  setSelectedButton,
  setInnerWidth,
} = uiMasterDataSlice.actions;

export default uiMasterDataSlice.reducer;
