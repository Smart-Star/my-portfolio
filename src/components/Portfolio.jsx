import { motion } from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { projects } from '../constants';
import { ShinyEffect } from './ShinyEffect';

// viewport={{ once: true }}
export const Portfolio = () => {
  const a = projects;
  console.log(a.length);

  return (
    <section id="portfolio" className="box-width paddingX paddingY relative">
      <h2 className="text-3xl text-gray-200 font-bold mb-8 text-center">Portfolio</h2>

      {projects.map((item) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          key={item.id}
          className={`flex flex-col lg:flex-row gap-8 border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg p-10
          ${item.id % 2 === 0 && 'lg:flex-row-reverse'}
           ${item.id === 8 ? `mb-0` : `mb-12`}
          `}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            <img
              src={item.img}
              alt={item.title}
              className="size-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <div
            className={`w-full flex flex-col justify-center items-center 
            ${item.id % 2 === 0 ? `lg:items-end` : `lg:items-start`}`}
          >
            <h3 className="text-xl md:text-3xl font-semibold text-gray-200 mb-4">{item.title}</h3>
            <p
              className={`text-base md:text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8 text-center 
              ${item.id % 2 === 0 ? `lg:text-right` : `lg:text-left`}`}
            >
              {item.description}
            </p>

            <div className="flex space-x-4">
              <a
                href={item.links.site}
                target="_blank"
                className="px-4 py-2 bg-purple-600 text-gray-200 rounded-md hover:bg-purple-700 transition-all duration-300"
              >
                View site
              </a>
              <a
                href={item.links.github}
                target="_blank"
                className="px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition-all duration-300 flex justify-center items-center"
              >
                <AiOutlineGithub size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute -left-20 top-[20%] w-full hidden md:block">
        <ShinyEffect left={-90} right={0} top={0} size={1000} />
      </div>

      <div className="absolute -right-[20rem] bottom-[40%] w-full hidden md:block">
        <ShinyEffect left={-90} right={0} top={0} size={1000} />
      </div>

      <div className="absolute left-0 bottom-[30rem] w-full hidden md:block lg:hidden">
        <ShinyEffect left={-90} right={0} top={0} size={1000} />
      </div>
    </section>
  );
};

/* 
  ${item.length - 1 === item.id ? `pb-0` : `pb-12`}
  ${item.id === 7 ? `mb-0` : `mb-12`}  
*/
