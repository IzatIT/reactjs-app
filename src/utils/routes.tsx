import { SignInPage } from "src/pages";

export type RouteData = {
    path: string;
    element: React.ReactElement;
    children?: RouteData[]
}

export const ROUTES = [
    {
        path: "/",
        element: <SignInPage />,
    }
]