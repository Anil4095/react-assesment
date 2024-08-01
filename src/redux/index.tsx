import { createStore } from 'redux';
import authReducer from './reducers';

const store = createStore(authReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
