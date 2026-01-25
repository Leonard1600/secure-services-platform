import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-8">
          Panel de Control
        </h2>

        <nav className="flex-1 space-y-4 text-sm">
          <button
            onClick={() => navigate('/dashboard')}
            className="block w-full text-left hover:text-blue-400 transition"
          >
            Dashboard
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
