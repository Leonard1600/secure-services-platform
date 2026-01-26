import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-28 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-50 text-blue-600">
            Contacto profesional
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Hablemos de tu entorno tecnológico
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Si tu empresa requiere soporte en seguridad electrónica o
            infraestructura tecnológica, podemos ayudarte a evaluar tu entorno
            actual y definir una solución segura, escalable y alineada a tus
            objetivos operativos.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARD ================= */}
      <section className="py-28 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 md:p-12 space-y-10">

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Ponte en contacto con nosotros a través de los siguientes canales.
              Analizamos tu caso y te brindamos una respuesta clara, honesta y
              orientada a resolver tu necesidad técnica.
            </p>

            {/* PHONE */}
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                Teléfono / WhatsApp
              </p>
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline text-base"
              >
                +1 000 000 0000
              </a>
            </div>

            {/* EMAIL */}
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                Correo electrónico
              </p>
              <a
                href="mailto:contacto@secureservices.com"
                className="text-blue-600 font-medium hover:underline text-base"
              >
                contacto@secureservices.com
              </a>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
              >
                Contactar por WhatsApp
              </a>
            </div>

            <p className="text-gray-500 text-sm pt-4 leading-relaxed">
              Atendemos consultas técnicas, proyectos nuevos y solicitudes de
              mantenimiento para empresas que requieren soporte confiable,
              continuidad operativa y control de su infraestructura.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;


