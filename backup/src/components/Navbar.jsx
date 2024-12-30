import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toogleNav = () => {
    setNav((prev) => !prev);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        danmping: 15,
      },
    },
    closed: {
      x: '-100%',
      transition: {
        stiffness: 20,
        danmping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur-md py-4">
      <div className="box-width paddingX flex justify-between items-center text-gray-200 text-xl">
        <a href="/">Foluso Ojutalayo</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          {navLinks.map((link) => (
            <li key={link.id} className="hover:text-purple-600 transition-all duration-300">
              <Link to={link.href} smooth offset={-50} duration={500}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button type="button" onClick={toogleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen  bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center cursor-pointer">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.href} onClick={toogleNav} smooth offset={-50} duration={500}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
