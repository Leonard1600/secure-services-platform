import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <header className="bg-gradient-to-b from-gray-50 to-white py-28 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-blue-50 text-blue-600">
            Servicios técnicos para entornos empresariales
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Soluciones técnicas para seguridad e infraestructura empresarial
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios profesionales en seguridad electrónica e
            infraestructura tecnológica, enfocados en reducir riesgos,
            fortalecer el control operativo y garantizar estabilidad en
            entornos empresariales y comerciales.
          </p>
        </div>
      </header>

      {/* ================= LISTADO ================= */}
      <section className="py-28 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* ================= SEGURIDAD ELECTRÓNICA ================= */}
          <section className="mb-24">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Seguridad electrónica
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
              Implementamos soluciones de seguridad física orientadas a la
              protección de instalaciones, activos y personas, priorizando
              prevención, control y capacidad de respuesta ante incidentes.
            </p>

            <div className="grid gap-8 md:gap-10 md:grid-cols-2">
              {[
                {
                  title: 'Sistemas de videovigilancia',
                  desc: 'Diseño e instalación de sistemas de videovigilancia confiables, enfocados en supervisión operativa, prevención de incidentes y respaldo visual continuo.',
                },
                {
                  title: 'Control de accesos y perímetros',
                  desc: 'Soluciones de control de accesos y seguridad perimetral para reducir riesgos, prevenir intrusiones y reforzar la seguridad de las instalaciones.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= INFRAESTRUCTURA TI ================= */}
          <section className="mb-28 md:mb-32">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Infraestructura tecnológica
            </h2>
            <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
              Diseñamos e implementamos infraestructura TI estable, segura y
              escalable, alineada a las necesidades operativas actuales y al
              crecimiento futuro de cada organización.
            </p>

            <div className="grid gap-8 md:gap-10 md:grid-cols-2">
              {[
                {
                  title: 'Cableado estructurado',
                  desc: 'Implementación de cableado estructurado profesional, preparado para crecimiento futuro y diseñado para garantizar orden, rendimiento y confiabilidad.',
                },
                {
                  title: 'Redes y conectividad',
                  desc: 'Diseño, optimización y aseguramiento de redes cableadas e inalámbricas, priorizando estabilidad, seguridad y continuidad del servicio.',
                },
                {
                  title: 'Servidores y sistemas',
                  desc: 'Configuración y administración de servidores locales o en la nube, con foco en disponibilidad, respaldo de la información y control operativo.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= PROCESO ================= */}
          <section className="mb-28 md:mb-32">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                Cómo trabajamos como socio tecnológico
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Gestionamos cada proyecto de forma estructurada, transparente y
                orientada a resultados, acompañando a nuestros clientes durante
                todo el ciclo técnico.
              </p>
            </div>

            <div className="grid gap-8 md:gap-10 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico técnico',
                  desc: 'Evaluamos el entorno, los riesgos y las necesidades reales antes de definir cualquier solución.',
                },
                {
                  step: '02',
                  title: 'Diseño de la solución',
                  desc: 'Diseñamos una solución segura y escalable, alineada a los objetivos operativos del negocio.',
                },
                {
                  step: '03',
                  title: 'Implementación controlada',
                  desc: 'Ejecutamos la solución con estándares profesionales y mínima interrupción de la operación.',
                },
                {
                  step: '04',
                  title: 'Soporte y mejora continua',
                  desc: 'Brindamos soporte continuo para asegurar estabilidad, prevención de fallos y evolución constante.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    {item.step}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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
            <p className="text-gray-600 mb-10 max-w-3xl leading-relaxed">
              Proveemos soporte técnico continuo para mantener la operación
              estable, reducir tiempos de inactividad y anticipar fallos
              críticos.
            </p>

            <article className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition max-w-3xl">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-600">
                Mantenimiento y soporte especializado
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Soporte preventivo y correctivo enfocado en continuidad
                operativa, respuesta técnica oportuna y evolución constante de
                la infraestructura tecnológica.
              </p>
            </article>
          </section>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-24 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Evaluemos tu entorno tecnológico
          </h2>

          <p className="text-blue-100 mb-10 md:mb-12 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Analizamos tu infraestructura actual y te proponemos soluciones
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






