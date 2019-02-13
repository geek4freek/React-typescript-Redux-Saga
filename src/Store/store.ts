import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import imageReducer from "./ImageDragger/reducer/imagereducer";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const rootstore = createStore(imageReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default rootstore;
