import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Components/CartSlice/CartSlice";
import favReducer from "../Components/FavSlice/FavSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session"; 
import persistStore from "redux-persist/es/persistStore";



const persistConfig = {
    key: "root", 
    storage, 
    blacklist: ['auth'], // Exclude 'auth' from being persisted
  
  };
  const persistedCartReducer = persistReducer(persistConfig, cartReducer);
  const persistedFavReducer = persistReducer(persistConfig, favReducer);
const jwtToken = localStorage.getItem("jwt_webmarker")
  document.cookie = `token=${jwtToken}; path=/; secure; HttpOnly; SameSite=Strict`;

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    fav:persistedFavReducer
  },
});
 
export default store;
export const persistor = persistStore(store)