import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesSucces,
  fetchRepositoriesError,
} from "./personalHomepageSlice";
import { getRepositories } from "./personalHomepageAPI";

const loadingDelay = 2000;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSucces(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
