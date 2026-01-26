import { Link, NavLink } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* BRAND */}
        <div className="text-center md:text-left mb-4">
          <Link to="/" className="no-underline text-inherit">
            <span className="block text-lg font-semibold text-gray-900">
              Infraestructura Tecnológica
            </span>
            <span className="block text-sm text-gray-500">
              Infraestructura tecnológica inteligente
            </span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Navegación principal">
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-gray-700">
            <li>
              <NavLink to="/" className="hover:text-blue-600 transition">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-blue-600 transition">
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-blue-600 transition">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                className="text-blue-600 font-semibold hover:underline"
              >
                Acceso clientes
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default PublicHeader;
