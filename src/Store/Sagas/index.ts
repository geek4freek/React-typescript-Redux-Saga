import { all, call, put, select, takeLatest } from "@redux-saga/core/effects";
import Axios from "axios";
import Actions from "../ImageDragger/Actions";
import { Iimage, ImageDraggerTypes, Istateimage } from "../ImageDragger/types";

function* handleFetchImages() {
  const images = yield call(fetchImages);
  yield put(Actions.setimage(images));
}
const fetchImages = async (pageNumber?: number) => {
  const { data: image } = await Axios.get<Iimage[]>(
    `https://api.unsplash.com/photos/?page=${
      pageNumber === undefined ? 1 : pageNumber
    };client_id=${process.env.REACT_APP_UNSPLASHED}`
  );
  return image;
};

function* handlePageIncrement() {
  let pageNumber = yield getCurrentPage();
  pageNumber++;
  const images = yield call(fetchImages.bind(null, pageNumber));
  yield all([
    put(Actions.setimage(images)),
    put(Actions.pageNumberIncremented(pageNumber))
  ]);
}

function* getCurrentPage() {
  const state = yield select();
  const pageNumber = (state as Istateimage).pagenumber;
  return pageNumber;
}

// watcher saga
function* rootSaga() {
  yield takeLatest(ImageDraggerTypes.FETCH_REQUEST, handleFetchImages);
  yield takeLatest(ImageDraggerTypes.INCREASE_PAGENUMBER, handlePageIncrement);
}

export default rootSaga;
