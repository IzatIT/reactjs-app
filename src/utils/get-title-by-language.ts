import { CookieKey, getCookie } from "./cookie";

type TitleLocaleObject = {
    titleRu: string;
    titleKg: string;
    titleEn: string;
    [key: string]: any | undefined;
}

type UniversalObject<T extends TitleLocaleObject> =
    | Record<string, T[keyof T]>
    | undefined
    | null;


export const getTitleByLang = <T extends TitleLocaleObject>(data: UniversalObject<T>, locale?: string) => {
    const localLocale = locale || getCookie(CookieKey.LANGUAGE)
    if (data) {
        switch (localLocale) {
            case "en":
                return data?.["titleEn"];
            case "kg":
                return data?.["titleKg"];
            case "ru":
                return data?.["titleRu"];
            default:
                return data?.["titleKg"];
        };
    };
    return "";
};