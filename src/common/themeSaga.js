import { select, call, takeLatest } from "redux-saga/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { saveIsDarkThemeInLocalStorage } from "./isDarkThemeLocalStorage";

function* saveIsDarkThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveIsDarkThemeInLocalStorage, isDarkTheme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, saveIsDarkThemeInLocalStorageHandler);
}
