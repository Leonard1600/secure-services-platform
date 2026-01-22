import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
