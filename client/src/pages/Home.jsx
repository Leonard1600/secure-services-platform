import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="bg-gray-950 text-gray-100">

      {/* ================= HERO ================= */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
            Infraestructura, Redes y Seguridad Electrónica
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
            Infraestructura tecnológica y
            <span className="block text-blue-500 mt-4">
              sistemas de seguridad inteligentes
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Diseñamos e implementamos soluciones en infraestructura tecnológica,
            redes y seguridad electrónica para empresas que requieren control,
            continuidad operativa y soporte técnico confiable.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              to="/contact"
              className="px-9 py-4 rounded-xl bg-blue-600 text-white font-medium shadow-xl hover:bg-blue-700 transition"
            >
              Solicitar asesoría técnica
            </Link>

            <Link
              to="/services"
              className="px-9 py-4 rounded-xl border border-gray-700 text-gray-200 hover:bg-gray-800 transition"
            >
              Explorar soluciones
            </Link>
          </div>
        </motion.div>
      </header>

      {/* ================= SERVICIOS ================= */}
      <section className="py-36 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Servicios técnicos especializados
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Soluciones diseñadas para entornos empresariales que exigen
              estabilidad, control y soporte profesional continuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Seguridad electrónica',
                desc: 'Videovigilancia, control de accesos, alarmas y sistemas de monitoreo diseñados para entornos críticos.'
              },
              {
                title: 'Infraestructura tecnológica',
                desc: 'Redes, servidores, cableado estructurado y soluciones de respaldo para continuidad operativa.'
              },
              {
                title: 'Gestión y soporte técnico',
                desc: 'Soporte especializado, gestión de incidencias y mantenimiento técnico para empresas.'
              }
            ].map(service => (
              <motion.article
                key={service.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="bg-gray-900/80 border border-gray-800 rounded-2xl p-10 shadow-lg hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-600 py-32 px-6 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Un proveedor técnico para operaciones críticas
          </h2>

          <p className="mb-14 text-blue-100 text-lg leading-relaxed">
            Seguridad, infraestructura y soporte técnico diseñados para empresas
            que no pueden permitirse interrupciones.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 px-9 py-4 rounded-xl font-medium shadow-xl hover:bg-gray-100 transition"
          >
            Hablar con un especialista
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default Home;


