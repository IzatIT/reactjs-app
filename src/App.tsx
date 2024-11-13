import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CookieKey, getCookie, RouteData, ROUTES } from "./utils";
import { SignInPage } from "./pages";
import { Suspense } from "react";
import { AppLayout } from "./shared/layout";
import { useAppDispatch, useAppSelector } from "./hooks";
import { ErrorSnackbar } from "./shared";
import { setCredentials } from "./store";

const renderRoutes = (route: RouteData) => {
  const renderedRoutes: JSX.Element[] = []

  const renderRoute = (currentRoute: RouteData) => {
    renderedRoutes.push(
        <Route
            path={currentRoute.path}
            key={currentRoute.path}
            element={currentRoute.element}
        />,
    )

    currentRoute.children?.forEach((child) => {
      renderRoute(child)
    })
  }

  renderRoute(route)
  return renderedRoutes

}

function App() {
  const dispatch = useAppDispatch()
  const accessTokenFromCookie = getCookie(CookieKey.ACCESS_TOKEN)
  const username = getCookie(CookieKey.USER_NAME)
  const accessToken = useAppSelector((state) => state.auth.data?.authenticationToken)
  const { pathname } = useLocation()
  const routes = ROUTES.map(renderRoutes)
  const isSignInPage = pathname === "/"
  const errorMessage = useAppSelector((state) => state.error.message);

  if (accessTokenFromCookie) {
    dispatch(setCredentials({ authenticationToken: accessTokenFromCookie, id: 1, inn: "", username: username ?? "" }))
  }

  if (!accessToken && !isSignInPage) return <Navigate to='/' />

  if (accessToken && isSignInPage) return <Navigate to='/erp' />

  const route = (
      <Suspense fallback={<>Loading...</>}>
        <ErrorSnackbar errorMessage={errorMessage} />
        <Routes>
          <Route path={'/sign-in'} element={<SignInPage />} />
          {routes}
        </Routes>
      </Suspense>
  )

  if (isSignInPage) return route
  return (
      <AppLayout>
        {route}
      </AppLayout>
  );
}

export default App;
