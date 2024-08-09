import { motion } from 'framer-motion';
import { AiOutlineBehanceSquare, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <section className="box-width paddingX paddingY space-y-12">
      <div
        className="border border-gray-300 border-t-0 
      opacity-30"
      />

      <div className="flex justify-between md:max-w-[80%] lg:max-w-[70%]">
        <div>
          <h3 className="text-gray-400 md:text-lg mb-2">Call</h3>
          <a
            href="tell:+234-813-4540-483"
            className="text-gray-300 text-xs md:text-base lg:text-lg"
          >
            +234-813-4540-483
          </a>
        </div>

        <div>
          <h3 className="text-gray-400 md:text-lg mb-2">Email</h3>
          <a
            href="mailto:ojutalayofoluso@gmail.com"
            className="text-gray-300 text-xs md:text-base lg:text-lg"
          >
            ojutalayofoluso@gmail.com
          </a>
        </div>
      </div>

      {/* flex flex-col items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0  | flex items-center justify-between */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex gap-6 text-gray-400 text-4xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.25 }}
            href="https://github.com/Smart-Star"
            target="_blank"
          >
            <AiOutlineGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.25 }}
            href="https://www.linkedin.com/in/foluso-ojutalayo/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.25 }}
            href="https://www.behance.net/folusoojutalayo"
            target="_blank"
          >
            <AiOutlineBehanceSquare />
          </motion.a>
        </div>

        <p className="text-gray-400 text-sm lg:text-lg">
          @2024 Ojutalayo Foluso. All rights reserved.
        </p>
      </div>
    </section>
  );
};
