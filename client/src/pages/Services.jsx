import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <header className="bg-gradient-to-b from-gray-50 to-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            Servicios técnicos orientados a empresas
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Soluciones técnicas para seguridad y continuidad operativa
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Brindamos servicios profesionales en seguridad electrónica e
            infraestructura tecnológica, enfocados en reducir riesgos
            operativos, mejorar el control técnico y garantizar estabilidad en
            entornos empresariales y comerciales.
          </p>
        </div>
      </header>

      {/* ================= LISTADO ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ================= SEGURIDAD ELECTRÓNICA ================= */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Seguridad electrónica
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Implementamos soluciones de seguridad diseñadas para proteger
              instalaciones, activos y personas, priorizando prevención,
              control y respuesta oportuna.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  title: 'Sistemas de videovigilancia',
                  desc: 'Diseño e instalación de sistemas de videovigilancia con monitoreo confiable, orientados a prevención de incidentes, control operativo y respaldo visual.',
                },
                {
                  title: 'Control de accesos y perímetros',
                  desc: 'Implementación de sistemas de control de accesos y seguridad perimetral para reducir riesgos, prevenir intrusiones y fortalecer la seguridad física.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= INFRAESTRUCTURA TI ================= */}
          <section className="mb-32">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Infraestructura tecnológica
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Diseñamos e implementamos infraestructura TI estable, segura y
              escalable, alineada a las necesidades reales de cada operación.
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {[
                {
                  title: 'Cableado estructurado',
                  desc: 'Implementación de cableado profesional preparado para crecimiento futuro, garantizando orden, rendimiento y confiabilidad.',
                },
                {
                  title: 'Redes y conectividad',
                  desc: 'Diseño y optimización de redes cableadas e inalámbricas, priorizando estabilidad, seguridad y continuidad del servicio.',
                },
                {
                  title: 'Servidores y sistemas',
                  desc: 'Instalación y configuración de servidores locales o en la nube, asegurando disponibilidad, respaldo y control de la información.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= PROCESO ================= */}
          <section className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                Cómo trabajamos como socio tecnológico confiable
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Gestionamos cada proyecto de principio a fin, con un enfoque
                profesional, ordenado y orientado a resultados reales.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico',
                  desc: 'Analizamos el entorno técnico, riesgos y necesidades reales antes de proponer cualquier solución.',
                },
                {
                  step: '02',
                  title: 'Diseño',
                  desc: 'Diseñamos una solución técnica segura, escalable y alineada a los objetivos operativos.',
                },
                {
                  step: '03',
                  title: 'Implementación',
                  desc: 'Ejecutamos la solución con estándares profesionales, mínima interrupción y control técnico.',
                },
                {
                  step: '04',
                  title: 'Soporte continuo',
                  desc: 'Brindamos mantenimiento y soporte para asegurar estabilidad, prevención y mejora constante.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SOPORTE ================= */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Gestión y soporte técnico
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Proveemos soporte técnico continuo para mantener la operación
              estable, reducir tiempos de inactividad y anticipar fallos
              críticos.
            </p>

            <article className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition max-w-3xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Mantenimiento y soporte especializado
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Soporte preventivo y correctivo enfocado en continuidad
                operativa, respuesta técnica oportuna y mejora constante de la
                infraestructura.
              </p>
            </article>
          </section>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-28 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Evaluemos tu entorno técnico
          </h2>

          <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            Analizamos tu infraestructura actual y proponemos soluciones
            técnicas alineadas a tus objetivos operativos y de crecimiento.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-medium shadow-md hover:bg-gray-100 transition"
          >
            Solicitar asesoría técnica
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Services;






