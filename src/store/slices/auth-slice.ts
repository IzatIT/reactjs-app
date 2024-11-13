import { createSlice, SerializedError } from '@reduxjs/toolkit';
import { authApiSlice } from '../api-slices';
import { AuthResponse } from 'src/models';
import { CookieKey, removeCookie, setCookie } from 'src/utils';

type InitialStateType = {
    data: AuthResponse | null,
    isLoading: boolean,
    error: SerializedError | null,
}

const initialState: InitialStateType = {
    data: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: { payload: AuthResponse }) => {
            state.data = action.payload
            state.isLoading = false
            state.error = null
        },
        logOut: (state) => {
            state.data = null
            state.isLoading = false
            state.error = null
            removeCookie(CookieKey.ACCESS_TOKEN)
            removeCookie(CookieKey.USER_NAME)
            removeCookie(CookieKey.REFRESH_TOKEN)
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApiSlice.endpoints.login.matchPending,
                (state) => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                authApiSlice.endpoints.login.matchFulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    setCookie(CookieKey.ACCESS_TOKEN, action.payload.authenticationToken)
                    setCookie(CookieKey.USER_NAME, action.payload.username)
                }
            )
            .addMatcher(
                authApiSlice.endpoints.login.matchRejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.error;
                }
            );
    },
});

export const { setCredentials, logOut } = authSlice.actions
export const authReducer = authSlice.reducer;
