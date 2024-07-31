import Config from "../Config";
const LOCAL_BACKEND = "http://127.0.0.1:5000";
const DEV_BACKEND = "https://localhost:8000";

export const BACKEND_BASE_URL = () => {
  if (process.env.NODE_ENV === "development") {
    // return DEV_BACKEND
    return LOCAL_BACKEND;
  }

  switch (window.location.host) {
    // * stg
    case Config.entrySites.hosts.stg:
      return process.env.REACT_APP_STG_BACKEND_URL || LOCAL_BACKEND;

    // * live
    case Config.entrySites.hosts.live:
      return process.env.REACT_APP_LIVE_BACKEND_URL || LOCAL_BACKEND;
    default:
      return process.env.REACT_APP_LIVE_BACKEND_URL || LOCAL_BACKEND;
  }
};
