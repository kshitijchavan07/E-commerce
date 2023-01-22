import { legacy_createStore as createStore,compose,applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig={
    key:'root',
    version:1,
    storage
}

const persistedReducer=persistReducer(persistConfig,RootReducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
    )
export default store