import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-sm">
                SS
              </span>

              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">
                  Secure<span className="text-blue-500">Services</span>
                </span>
                <span className="text-xs text-gray-500">
                  Seguridad electrónica & Infraestructura TI
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Soluciones profesionales en infraestructura tecnológica, redes y
              seguridad electrónica para empresas que requieren continuidad
              operativa, soporte técnico confiable y crecimiento sostenible.
            </p>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-5">
              Contacto
            </h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500">
                  Correo electrónico
                </span>
                <a
                  href="mailto:contacto@secureservices.com"
                  className="hover:text-white transition"
                >
                  contacto@secureservices.com
                </a>
              </li>

              <li>
                <span className="block text-gray-500">
                  Teléfono
                </span>
                <a
                  href="tel:+10000000000"
                  className="hover:text-white transition"
                >
                  +1 000 000 0000
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Secure Services. Todos los derechos reservados.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Términos y condiciones
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default PublicFooter;


