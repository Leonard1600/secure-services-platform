import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-bold">
            SS
          </span>
          <span className="text-gray-900 font-semibold text-base tracking-tight">
            Secure Services
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          {user && (
            <span className="text-sm text-gray-500 hidden sm:block">
              Panel administrativo
            </span>
          )}

          <button
            onClick={handleLogout}
            className="text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-700
                       hover:bg-gray-100 hover:border-gray-400 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


