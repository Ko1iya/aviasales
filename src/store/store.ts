import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import ticketApi from './service/ticketApi';

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ticketApi.middleware),
  });

type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export { setupStore, AppStore, AppDispatch };
