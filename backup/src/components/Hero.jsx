import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { AiOutlineBehanceSquare, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { cv, profilePic } from '../assets';
import { ShinyEffect } from './ShinyEffect';

export const Hero = () => {
  return (
    <section className="mt-10 box-width paddingX paddingY relative">
      <div className="grid lg:grid-cols-2 lg:place-items-center gap-x-6 gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <TypeAnimation
            sequence={['Frontend Developer', 1000, 'Web Designer', 1000, 'Consultant', 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-3xl lg:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hello, I am <br />
            <span className="text-purple-500">Foluso Ojutalayo</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[400px] md:max-w-[520px] md:text-xl text-lg mb-6"
          >
            I am a passionate frontend developer and a UI designer with one year experiece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex lg:flex-row items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: ' 0 0 8px rgba(0, 0, 0, 0.3)' }}
              transition={{ duration: 0.25 }}
              href={cv}
              target="_blank"
              className="z-10 cursor-pointer font-semibold text-gray-200 py-2 px-4 md:py-4 md:px-8 border border-purple-400 rounded-md"
            >
              Download CV
            </motion.a>

            <div className="flex gap-6 text-4xl md:text-6xl text-purple-400 z-20">
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
          </motion.div>
        </motion.div>

        <div className="flex justify-center items-center w-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={profilePic}
            className="size-full lg:w-[400px] object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-0 top-[40rem] lg:top-[10rem] w-full hidden md:block">
        <ShinyEffect left={-90} right={0} top={0} size={1400} />
      </div>
    </section>
  );
};
