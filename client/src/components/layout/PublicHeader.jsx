import { Link, NavLink } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header style={{ borderBottom: '1px solid #e5e7eb' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* BRAND */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ display: 'block', fontSize: '18px', fontWeight: 600 }}>
            Infraestructura Tecnológica
          </span>
          <span style={{ display: 'block', fontSize: '14px', color: '#6b7280' }}>
            Infraestructura, Redes y Seguridad Electrónica
          </span>
        </Link>

        {/* NAV + CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <nav aria-label="Navegación principal">
            <ul
              style={{
                display: 'flex',
                gap: '24px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/services">Servicios</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
              </li>
            </ul>
          </nav>

          <Link
            to="/auth"
            style={{
              padding: '8px 20px',
              borderRadius: '8px',
              backgroundColor: '#1d4ed8',
              color: '#ffffff',
              fontWeight: 600,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Acceso clientes
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
