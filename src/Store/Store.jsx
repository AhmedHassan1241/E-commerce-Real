import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/CartSlice/CartSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session"; 
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: "root", 
    storage,   
  };
  const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});
 
export default store;
export const persistor = persistStore(store)