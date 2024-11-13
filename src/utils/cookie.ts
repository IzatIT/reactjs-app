import Cookies from "js-cookie"

export enum CookieKey {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    USER_NAME = "USER_NAME",
    REFRESH_TOKEN = "REFRESH_TOKEN",
    LANGUAGE = "LANGUAGE"
}

type key = CookieKey.ACCESS_TOKEN | CookieKey.LANGUAGE | CookieKey.REFRESH_TOKEN | CookieKey.USER_NAME

export const setCookie = (name: key, value: string) =>
    Cookies.set(name, value)

export const getCookie = (name: key) => {
    return Cookies.get(name)
}

export const removeCookie = (name: key) => {
    Cookies.remove(name)
}
