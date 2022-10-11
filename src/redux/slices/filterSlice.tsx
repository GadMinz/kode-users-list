import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, SortType } from "../types";

type filterState = {
  searchValue: string;
  category: Category;
  sort: SortType;
};

const initialState: filterState = {
  searchValue: "",
  category: "all",
  sort: "abc",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategory(state, action: PayloadAction<Category>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
