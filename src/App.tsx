import { useEffect } from "react";
import axios from "axios"; 
import "./App.css";
import RestaurantMenuPage from "./pages/RestaurantMenuPage";
import { StorageFields } from "./browserStorage/storageConfig";
import { BrowserStorage } from "./browserStorage";
import { getMMenuListData } from "./redux/actions/uiMasterDataActions";
import { useAppDispatch } from "./hooks";
import { setGlobalLoading } from "./redux/reducers/authSlice";

const App = () => {

  const dispatch = useAppDispatch();

  const getClientIp = async () => {
    const res = await axios.get("https://api64.ipify.org");
    // console.log(res?.data);

    // dispatch(setClientIp(res?.data?.IPv4));
    return BrowserStorage.addItemToStorage({
      key: StorageFields.CLIENT_IP,
      value: res?.data
    });
  };

  const loadUiData = async () => {
    dispatch(setGlobalLoading(true));
    try {
      await getClientIp();

    } catch (err: any) {
    } finally {
      // await dispatch(getUiMasterData());
      await dispatch(getMMenuListData());

      dispatch(setGlobalLoading(false));
    }
  };

  useEffect(() => {
    console.log("App mounted");
    loadUiData();
  }, []);

  return (
    <div className="App bg-gray-50">
      <RestaurantMenuPage />
    </div>
  );
};

export default App;
