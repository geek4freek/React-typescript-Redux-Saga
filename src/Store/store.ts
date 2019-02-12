import { createStore } from "redux";
import imageReducer from "./ImageDragger/reducer/imagereducer";

const rootstore = createStore(imageReducer);
// tslint:disable-next-line: no-console
console.log(rootstore);
export default rootstore;
