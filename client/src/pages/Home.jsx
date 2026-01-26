import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="bg-gray-950 text-gray-100">

      {/* ================= HERO ================= */}
      <header className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-4 md:mb-6">
            Servicios seguros inteligentes · Infraestructura y seguridad TI
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
            Servicios seguros inteligentes
            <span className="block text-blue-500 mt-3 md:mt-4">
              para operaciones empresariales críticas
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Acompañamos a empresas y organizaciones en el diseño, implementación
            y gestión de infraestructura tecnológica y sistemas de seguridad
            electrónica, garantizando continuidad operativa, control técnico y
            soporte profesional confiable.
          </p>

          <div className="flex justify-center gap-4 sm:gap-5 flex-wrap">
            <Link
              to="/contact"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-blue-600 text-white font-medium shadow-xl hover:bg-blue-700 transition"
            >
              Solicitar asesoría técnica
            </Link>

            <Link
              to="/services"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
            >
              Ver servicios
            </Link>
          </div>
        </motion.div>
      </header>

      {/* ================= SERVICIOS ================= */}
      <section className="py-24 md:py-36 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Servicios técnicos especializados
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Ofrecemos soluciones técnicas orientadas a estabilidad,
              escalabilidad y continuidad operativa, alineadas a los objetivos
              reales del negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Seguridad electrónica',
                desc: 'Sistemas de videovigilancia, control de accesos y monitoreo diseñados para proteger activos, instalaciones y operaciones críticas.'
              },
              {
                title: 'Infraestructura tecnológica',
                desc: 'Redes, servidores, cableado estructurado y soluciones de respaldo enfocadas en rendimiento, disponibilidad y crecimiento.'
              },
              {
                title: 'Gestión y soporte técnico',
                desc: 'Soporte técnico especializado y mantenimiento preventivo para reducir riesgos, fallos e interrupciones operativas.'
              }
            ].map(service => (
              <motion.article
                key={service.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-600 py-20 md:py-32 px-6 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Un socio tecnológico para operaciones que no pueden detenerse
          </h2>

          <p className="mb-10 md:mb-12 text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
            Infraestructura, seguridad electrónica y soporte técnico pensados
            para empresas que dependen de sistemas confiables y atención
            profesional continua.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-medium shadow-xl hover:bg-gray-100 transition"
          >
            Hablar con un especialista
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;
