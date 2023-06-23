import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import WeekListPage from '../components/WeekListPage';
import MonthListPage from '../components/MonthListPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../components/Profile";
import "../firebase/firebase"
import { AuthContext } from '../contextes/AuthContext';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>Loading.</div>
  }
  if (error) {
    return <div>Error Loading.</div>
  }
  return (
    <>
    <AuthContext.Provider value={ user }>
      <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} exact={ true } />
            <Route element={<ProtectedRoute isAllowed={ !!user }/>}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="weeklist" element={<WeekListPage />} />
              <Route path="monthlist" element={<MonthListPage />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
};

export default AppRouter;
