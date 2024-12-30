import { motion } from 'framer-motion';
import { skills } from '../constants';

export const Skillls = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1.2 }}
      id="skills"
      className="box-width paddingX paddingY flex flex-col justify-center items-center text-gray-200"
    >
      <h3 className="text-3xl font-bold text-center mb-8">Skillls</h3>
      <p className="text-center mb-8">
        I worked on various frontend projects. Check them{' '}
        <a href="#/" className="underline text-purple-600">
          here.
        </a>
      </p>

      <div className="grid lg:grid-cols-2 gap-8 w-full">
        {skills.map((item) => (
          <div
            key={item.category}
            className="border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">{item.category}</h3>

            <div className="grid grid-cols-2 gap-6 p-6 md:ml-10 md:-me-14 lg:ml-0 lg:-me-0">
              {item.technologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2">
                  <tech.Icon className={`${tech.className} text-3xl md:text-5xl lg:text-4xl`} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
