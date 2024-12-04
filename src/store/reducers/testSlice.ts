import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Interface to model the fake data retrieved by fetchTestData
interface TestData {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
}

/**
 * A simple function for fetching fake data
 *
 * @returns {object as TestData}
 */
export const fetchTestData = createAsyncThunk("get/fetchTestData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return (await response.json()) as TestData;
});

export const testSlice = createSlice({
  name: "test",
  initialState: {
    value: 0,
    data: {},
  },
  reducers: {
    // Increments the value state
    increment: (state) => {
      state.value += 1;
    },
    // Adds a specific amount to the value state
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // Adds a reducer for the above thunk action
  extraReducers: (builder) => {
    builder.addCase(fetchTestData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { increment, incrementByAmount } = testSlice.actions;

export default testSlice.reducer;
