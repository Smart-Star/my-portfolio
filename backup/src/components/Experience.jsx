import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { ShinyEffect } from './ShinyEffect';

export const Experience = () => {
  return (
    <section className="box-width paddingX paddingY relative">
      <h2 className="text-3xl text-gray-200 font-bold mb-8 text-center">Experience</h2>

      <motion.div initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-8">
        {experiences.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            key={item.id}
            className="border border-purple-900 bg-purple-900/20 rounded-lg shadow-md p-10 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-gray-100 text-2xl font-semibold mb-1">{item.company}</h2>
            <p className="text-gray-300">{item.period}</p>
            <p className="text-gray-400 mt-4">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 top-[20rem] lg:top-0 w-full hidden md:block">
        <ShinyEffect left={-90} right={0} top={0} size={1400} />
      </div>
    </section>
  );
};
