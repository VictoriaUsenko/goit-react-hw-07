import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

// Експортуємо фабрики екшенів
export const { changeFilter } = filtersSlice.actions;

// Експортуємо редюсер слайсу
export default filtersSlice.reducer;
