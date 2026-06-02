import { motion } from 'motion/react';
import { modules } from '../data';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-sans font-bold text-gray-900">Gravity Hub</h1>
        <p className="text-gray-600 mt-2">Explore os módulos de gravitação e astrofísica.</p>
      </header>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {modules.map((module) => (
          <motion.div
            key={module.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
            <p className="text-gray-600 text-sm">{module.description}</p>
            <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800">
              Acessar módulo →
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
