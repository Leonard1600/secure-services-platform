import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';

import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';
import PublicLayout from '../components/layout/PublicLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= RUTAS PÚBLICAS ================= */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Auth />} />
      </Route>

      {/* ================= RUTAS PROTEGIDAS ================= */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/* ================= REDIRECCIÓN FINAL ================= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

