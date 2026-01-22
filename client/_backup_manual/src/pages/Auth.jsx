import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        await register(formData);
      }

      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
        </h2>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        {!isLogin && (
          <div className="mb-4">
            <label className="block text-sm mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Contraseña</label>
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          {isLogin ? 'Entrar' : 'Registrarse'}
        </button>

        <p className="mt-4 text-center text-sm">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-semibold"
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
