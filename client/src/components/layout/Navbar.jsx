import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
      <h1 className="font-bold text-lg">
        Secure Services Platform
      </h1>

      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </nav>
  );
};

export default Navbar;
