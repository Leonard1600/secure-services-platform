import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            Contacto profesional
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Hablemos de tu proyecto
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Si necesitas asesoría en seguridad electrónica o infraestructura
            tecnológica, nuestro equipo puede ayudarte a diseñar una solución
            segura, escalable y alineada a tus objetivos.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARD ================= */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-12 space-y-12">

            <p className="text-gray-700 text-lg leading-relaxed">
              Ponte en contacto con nosotros a través de los siguientes canales.
              Te responderemos en el menor tiempo posible con atención personalizada.
            </p>

            {/* PHONE */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Teléfono / WhatsApp
              </p>
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                +1 000 000 0000
              </a>
            </div>

            {/* EMAIL */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Correo electrónico
              </p>
              <a
                href="mailto:contacto@secureservices.com"
                className="text-blue-600 font-medium hover:underline"
              >
                contacto@secureservices.com
              </a>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/10000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
              >
                Escríbenos por WhatsApp
              </a>
            </div>

            <p className="text-gray-500 text-sm pt-6 leading-relaxed">
              Atendemos consultas técnicas, proyectos nuevos y solicitudes de
              mantenimiento para empresas y particulares.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;

