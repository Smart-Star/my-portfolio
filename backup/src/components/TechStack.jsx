import { motion } from 'framer-motion';
import { techStack } from '../constants';

export const TechStack = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.5 }}
    className="w-full flex flex-col lg:flex-row justify-center items-center py-16 gap-x-16 gap-y-4 text-4xl md:text-7xl"
  >
    <p className="text-gray-200 text-2xl md:text-3xl">My Tech Stack</p>

    <div className="flex space-x-3">
      {techStack.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.25 }}
          className="z-10"
        >
          <item.Icon className={item.className} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);
