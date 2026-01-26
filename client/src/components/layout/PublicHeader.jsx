import { Link, NavLink } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* ================= BRAND ================= */}
        <Link
          to="/"
          className="flex items-center gap-3 text-gray-900 no-underline"
        >
          {/* LOGO */}
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-sm">
            SSI
          </span>

          {/* TITLE */}
          <div className="flex flex-col leading-tight">
            <span className="text-base md:text-lg font-semibold">
              Servicios Seguros Inteligentes
            </span>
            <span className="text-xs md:text-sm text-gray-500">
              Infraestructura tecnológica inteligente
            </span>
          </div>
        </Link>

        {/* ================= NAV + CTA ================= */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">

          <nav aria-label="Navegación principal">
            <ul className="flex gap-6 text-sm font-medium text-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600' : 'hover:text-blue-600'
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600' : 'hover:text-blue-600'
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600' : 'hover:text-blue-600'
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          <Link
            to="/auth"
            className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700 transition whitespace-nowrap"
          >
            Acceso clientes
          </Link>
        </div>

      </div>
    </header>
  );
};

export default PublicHeader;

