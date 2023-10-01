import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import LoginPage from "pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "pages/HomePage/HomePage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={
          <PrivateRoute redirectTo="/login"/>
        } />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
