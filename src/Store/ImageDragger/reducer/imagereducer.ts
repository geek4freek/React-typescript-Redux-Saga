import { Reducer } from "redux";
import { ImageDraggerTypes, Istateimage } from "../types";

const intialState: Istateimage = {
  images: []
};

const imageReducer: Reducer<Istateimage> = (state = intialState, action) => {
  if (action.type === ImageDraggerTypes.FETCH_REQUEST) {
    return { ...state };
  }

  if (action.type === ImageDraggerTypes.FETCH_SUCCESS) {
    const newimages = { ...state };
    newimages.images = [...newimages.images, ...action.payload];
    return { ...state, ...newimages };
  }
  return state;
};

export default imageReducer;
