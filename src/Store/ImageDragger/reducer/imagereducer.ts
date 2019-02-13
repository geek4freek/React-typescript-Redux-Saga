import { Reducer } from "redux";
import { ImageDraggerTypes, Istateimage } from "../types";

const intialState: Istateimage = {
  images: [],
  pagenumber: 1
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
  if (action.type === ImageDraggerTypes.PAGENUMBER_INCREASED) {
    const newImages = { ...state };
    newImages.pagenumber = action.payload;
    return { ...state, ...newImages };
  }
  return state;
};

export default imageReducer;
