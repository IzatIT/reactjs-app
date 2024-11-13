import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: { message: null },
    reducers: {
        setError: (state, action) => {
            state.message = action.payload;
        },
        clearError: (state) => {
            state.message = null;
        },
    },
});

export const { clearError, setError } = errorSlice.actions
export const errorReducer = errorSlice.reducer;