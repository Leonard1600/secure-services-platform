import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* LOGO (MISMO QUE PUBLIC HEADER) */}
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-sm">
                SSI
              </span>

              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">
                  Servicios Seguros Inteligentes
                </span>
                <span className="text-xs text-gray-500">
                  Infraestructura tecnológica inteligente
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Soluciones profesionales en infraestructura tecnológica, redes y
              seguridad electrónica orientadas a empresas que requieren
              continuidad operativa, control técnico y soporte confiable.
            </p>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-5">
              Contacto
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-gray-500 mb-1">
                  Correo electrónico
                </span>
                <a
                  href="mailto:leonardfiguera@gmail.com"
                  className="hover:text-white transition break-all"
                >
                  leonardfiguera@gmail.com
                </a>
              </li>

              <li>
                <span className="block text-gray-500 mb-1">
                  Teléfono
                </span>
                <a
                  href="tel:04249260404"
                  className="hover:text-white transition"
                >
                  04249260404
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <span className="text-center md:text-left">
            © {new Date().getFullYear()} Servicios Seguros Inteligentes. Todos los derechos reservados.
          </span>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Términos y condiciones
            </a>
          </div>
        </div>

        {/* ================= SIGNATURE ================= */}
        <div className="mt-6 text-center text-xs text-gray-600">
          Ingeniero Leonard Figuera
        </div>

      </div>
    </footer>
  );
};

export default PublicFooter;



