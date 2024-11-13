import {
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_API } from "src/constants";
import { CookieKey, getCookie, Path, removeCookie } from "src/utils";
import { AuthResponse } from "src/models";
import { logOut, setCredentials, setError } from "./slices";

function isFetchBaseQueryErrorWithMessage(
    error: FetchBaseQueryError
): error is FetchBaseQueryError & { data: { message: string } } {
    return (
        typeof error === "object" &&
        error !== null &&
        "data" in error &&
        typeof (error as any).data?.message === "string"
    );
}

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_API}`,
    credentials: "include",
    prepareHeaders: (headers) => {
        const accessToken = getCookie(CookieKey.ACCESS_TOKEN);
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (
    args: string | FetchArgs,
    api: any,
    extraOptions: Record<string, any>
) => {
    const refreshToken = getCookie(CookieKey.REFRESH_TOKEN);

    let result = await baseQuery(args, api, extraOptions);
    if (result?.error) {
        if (result.error.status === 401) {
            removeCookie(CookieKey.ACCESS_TOKEN);
            const refreshResult = await baseQuery(
                {
                    url: Path.Auth.refreshToken,
                    method: "POST",
                    body: {
                        refreshToken: refreshToken,
                    },
                },
                api,
                extraOptions
            );
            if (refreshResult?.data) {
                api.dispatch(setCredentials(refreshResult.data as AuthResponse));
                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(logOut());
                api.dispatch(setError("Session expired. Please log in again."));
            }
        } else if (isFetchBaseQueryErrorWithMessage(result.error)) {
            api.dispatch(setError(`${result.error.status} - ${result.error.data.message}`));
        } else {
            api.dispatch(setError(`${result.error.status} - An error occurred`));
        }
    }
    return result;
};

export const apiSlice = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
