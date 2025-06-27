import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeCOnnections: (state, action) => null,
  },
});

export const { addConnections, removeCOnnections } = connectionSlice.actions;
export default connectionSlice.reducer;
