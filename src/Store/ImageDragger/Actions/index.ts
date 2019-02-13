import { Iimage, ImageDraggerTypes } from "../types";

const loadImages = () => ({
  type: ImageDraggerTypes.FETCH_REQUEST
});

const setImages = (data?: Iimage[]) => ({
  payload: data,
  type: ImageDraggerTypes.FETCH_SUCCESS
});

const setError = (message: string) => ({
  payload: message,
  type: ImageDraggerTypes.FETCH_ERROR
});

const increasePageNumber = () => ({
  type: ImageDraggerTypes.INCREASE_PAGENUMBER
});

const pagenumberincrement = (pageNumber: number) => ({
  payload: pageNumber,
  type: ImageDraggerTypes.PAGENUMBER_INCREASED
});

export default {
  fetchimages: loadImages,
  handleerror: setError,
  incrementPageNumber: increasePageNumber,
  pageNumberIncremented: pagenumberincrement,
  setimage: setImages
};
