import Config from "../Config";
const LOCAL_BACKEND = "http://127.0.0.1:5000";
const DEV_BACKEND = "https://localhost:8000";
const STG_BACKEND = "";
const LIVE_BACKEND = "";

export const BACKEND_BASE_URL = () => {
  if (process.env.NODE_ENV === "development") {
    // return DEV_BACKEND
    return LOCAL_BACKEND;
  }

  switch (window.location.host) {
    // * stg
    case Config.entrySites.hosts.stg:
      return STG_BACKEND;
    case Config.entrySites.hosts.live:
      return LIVE_BACKEND;
    default:
      return LIVE_BACKEND;
  }
};
