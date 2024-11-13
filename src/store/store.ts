import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api";
import {authReducer, clearError, errorReducer} from "./slices";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        warnAfter: 128,
      },
    }).concat([apiSlice.middleware]),
  devTools: true,
});


store.subscribe(() => {
  const {error} = store.getState();
  if (error.message) {
    setTimeout(() => {
      store.dispatch(clearError());
    }, 4000);
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
