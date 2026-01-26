import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <header className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-20 md:pt-32 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            Servicios técnicos para entornos empresariales
          </span>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Soluciones técnicas para seguridad e infraestructura empresarial
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Servicios profesionales en seguridad electrónica e infraestructura
            tecnológica orientados a reducir riesgos, fortalecer el control
            operativo y garantizar estabilidad en entornos empresariales.
          </p>
        </div>
      </header>

      {/* ================= LISTADO ================= */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* ================= SEGURIDAD ELECTRÓNICA ================= */}
          <section className="mb-20">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Seguridad electrónica
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Soluciones de seguridad física orientadas a la protección de
              instalaciones, activos y personas, priorizando prevención,
              control y capacidad de respuesta.
            </p>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Sistemas de videovigilancia',
                  desc: 'Diseño e instalación de sistemas de videovigilancia enfocados en supervisión operativa, prevención de incidentes y respaldo visual continuo.',
                },
                {
                  title: 'Control de accesos y perímetros',
                  desc: 'Soluciones de control de accesos y seguridad perimetral para reducir riesgos, prevenir intrusiones y reforzar la seguridad física.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= INFRAESTRUCTURA TI ================= */}
          <section className="mb-24">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Infraestructura tecnológica
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Infraestructura TI estable, segura y escalable, alineada a las
              necesidades actuales y al crecimiento futuro de la organización.
            </p>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Cableado estructurado',
                  desc: 'Implementación profesional de cableado estructurado preparado para crecimiento futuro y alto rendimiento.',
                },
                {
                  title: 'Redes y conectividad',
                  desc: 'Diseño y optimización de redes cableadas e inalámbricas priorizando estabilidad, seguridad y continuidad.',
                },
                {
                  title: 'Servidores y sistemas',
                  desc: 'Configuración y administración de servidores locales o en la nube con foco en disponibilidad y respaldo.',
                },
              ].map((service) => (
                <article
                  key={service.title}
                  className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ================= PROCESO ================= */}
          <section className="mb-24">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
                Cómo trabajamos como socio tecnológico
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Un proceso estructurado, transparente y orientado a resultados
                durante todo el ciclo técnico.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico técnico',
                  desc: 'Evaluación del entorno, riesgos y necesidades reales.',
                },
                {
                  step: '02',
                  title: 'Diseño de la solución',
                  desc: 'Arquitectura segura y alineada a objetivos operativos.',
                },
                {
                  step: '03',
                  title: 'Implementación',
                  desc: 'Ejecución controlada con mínima interrupción.',
                },
                {
                  step: '04',
                  title: 'Soporte continuo',
                  desc: 'Estabilidad, prevención de fallos y mejora constante.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <span className="text-xs font-semibold text-blue-600">
                    {item.step}
                  </span>
                  <h3 className="text-base font-semibold mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SOPORTE ================= */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
              Gestión y soporte técnico
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Soporte técnico continuo para mantener la operación estable,
              reducir tiempos de inactividad y anticipar fallos críticos.
            </p>

            <article className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition max-w-2xl">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">
                Mantenimiento y soporte especializado
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Soporte preventivo y correctivo enfocado en continuidad
                operativa, respuesta técnica oportuna y evolución constante.
              </p>
            </article>
          </section>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600 py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-4xl font-semibold mb-5">
            Evaluemos tu entorno tecnológico
          </h2>

          <p className="text-blue-100 mb-9 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Analizamos tu infraestructura actual y proponemos soluciones
            alineadas a tus objetivos operativos.
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






