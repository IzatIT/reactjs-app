import { AuthRequest, AuthResponse } from "src/models";
import { apiSlice } from "src/store/api";
import { Path } from "src/utils";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, AuthRequest>({
            query: (credentials) => ({
                url: Path.Auth.login,
                method: "POST",
                body: { ...credentials },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
} = authApiSlice;
