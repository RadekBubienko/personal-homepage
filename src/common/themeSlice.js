import { createSlice } from "@reduxjs/toolkit";
import { getIsDarkThemeFromLocalStorage } from "./isDarkThemeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getIsDarkThemeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectIsDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
