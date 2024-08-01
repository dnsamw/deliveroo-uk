export enum IconButtonTypes {
  SIGNUP_LOGIN = "signup-login",
  ACCOUNT = "account",
  GROUP_ORDER = "group-order",
  SEARCH = "search",
}

export const siteMaterData = {
  brandName: "Deliveroo",
};

const Config = {
  successCode: "SUCCESS",
  errorCode: "ERROR",

  errorCodes: {
    OTPID_NOT_FOUND: "OTPID_NOT_FOUND",
  },

  encodeRequests: true,

  reduxPersistEncryptKey: process.env.REACT_APP_REDUX_PERSIST_ENCRYPT_KEY,
  entrySites: {
    hosts: {
      stg: "stg.stagingsite.io",
      live: "livesite.io",
    },
  },
  isEnableReduxDevTools: () => {
    if (
      Object.values(Config.entrySites.hosts.live).includes(window.location.host)
    )
      return false;
    return true;
  },
};

export default Config;
