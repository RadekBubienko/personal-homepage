import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSucces: (_, { payload: repositories }) => ({
      status: "succes",
      repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSucces,
  fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomepageState = (state) => state.personalHomepage;

export const selectRepositories = (state) =>
  selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = (state) =>
  selectPersonalHomepageState(state).status;

export default personalHomePageSlice.reducer;
