import { motion } from 'framer-motion';
import { acomplishments } from '../constants';

export const Contact = () => {
  return (
    <section id="contact" className="box-width paddingX paddingY">
      <h2 className="text-3xl text-gray-200 font-bold mb-8 text-center">Lets Connect</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 place-items-center gap-8"
      >
        <div className="space-y-10">
          <div className="text-gray-300">
            <h3 className="text-3xl font-semibold mb-2">
              About <span>Me</span>
            </h3>
            <p className="leading-7">
              As a UI/UX Designer, Brand Designer, and Frontend Developer, I create engaging digital
              experiences and compelling visual identites blending creativity and technical
              expertise to bring your vision to life.
            </p>
          </div>

          <div className=" flex items-center gap-4">
            {acomplishments.map((item) => (
              <div
                key={item.id}
                className="border border-purple-900 bg-purple-900/20 rounded-lg shadow-lg p-4 flex-1"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-100">{item.number}</h3>
                <p className="text-xs md:text-base text-gray-400">
                  <span>{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <form action="https://formspree.io/f/xyzgjwbk" method="POST" className="space-y-3">
          <input
            name="Name"
            type="text"
            placeholder="Your Name..."
            required
            className="form-input"
          />
          <input
            name="Email"
            type="email"
            placeholder="Your Email..."
            required
            className="form-input"
          />
          <textarea
            name="Message"
            cols="30"
            rows="5"
            placeholder="Your Message..."
            required
            className="form-input"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};
