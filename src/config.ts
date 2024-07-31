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
  entrySites: {
    hosts: {
      stg: "stg.stagingsite.io",
      live: "livesite.io",
    },
  },
};

export default Config;
