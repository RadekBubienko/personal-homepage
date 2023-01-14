const localStorageKey = "isDarkTheme";

export const saveIsDarkThemeInLocalStorage = (isDarkTheme) =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDarkTheme));

export const getIsDarkThemeFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;