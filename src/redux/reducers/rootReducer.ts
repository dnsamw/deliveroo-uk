import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";

import Config from "../../Config";
import auth, { AuthSlice } from "./authSlice";
// import selectedData, { SelectedDataSlice } from "./selectedDataSlice";
// import finalData, { FinalDataSlice } from "./finalDataSlice";
// import transaction, { TransactionSlice } from "./transactionSlice";

import uiMasterData, { UiMasterDataSlice } from "./uiMasterDataReducer";

export interface RootSliceType {
  auth: AuthSlice;
  // selectedData: SelectedDataSlice;
  // finalData: FinalDataSlice;
  // transaction: TransactionSlice;
  uiMasterData: UiMasterDataSlice;
}

// !* nested persist - uiMasterData
const uiMasterDataConfig = {
  key: "uiMasterData",
  storage,
  whitelist: ["selectedButton"],
  transforms: [
    encryptTransform({
      secretKey: Config.reduxPersistEncryptKey!,
    }),
  ],
};

const transactionConfig = {
  key: "transaction",
  storage,
  whitelist: [
    "selectedPaymentMethod",
    "transactionId",
    "selectedSplitType",
    "isPaymentComplete",
    "finalPaymentData",
    "preInspectionData",
    "paymentTypes",
    "hasVisitedPaymentScreen",
  ],
  transforms: [
    encryptTransform({
      secretKey: Config.reduxPersistEncryptKey!,
    }),
  ],
};

const rootReducer = combineReducers({
  auth,
  uiMasterData: persistReducer(uiMasterDataConfig, uiMasterData),
  // selectedData,
  // finalData,
  // transaction: persistReducer(transactionConfig, transaction),
});

export default rootReducer;
