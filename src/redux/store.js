import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
//adding saga middleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//running saga middleware
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
