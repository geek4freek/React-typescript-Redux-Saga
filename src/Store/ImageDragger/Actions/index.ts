import { Iimage, ImageDraggerTypes } from "../types";

const loadImages = () => ({
  type: ImageDraggerTypes.FETCH_REQUEST
});

const setImages = (data: Iimage[]) => ({
  payload: data,
  type: ImageDraggerTypes.FETCH_SUCCESS
});

const setError = (message: string) => ({
  payload: message,
  type: ImageDraggerTypes.FETCH_ERROR
});

export default {
  fetchimages: loadImages,
  handleerror: setError,
  setimage: setImages
};
