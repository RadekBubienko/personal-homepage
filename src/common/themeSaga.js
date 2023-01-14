import { select, call, takeLatest } from "redux-saga/effects";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { saveIsDarkThemeInLocalStorage } from "./isDarkThemeLocalStoprage";

function* saveIsDarkThemeInLocalStorageHandler() {
  const isDarkTheme = yield select(selectIsDarkTheme);
  yield call(saveIsDarkThemeInLocalStorage, isDarkTheme);
}

export function* themeSaga() {
  yield takeLatest(toggleTheme.type, saveIsDarkThemeInLocalStorageHandler);
}
