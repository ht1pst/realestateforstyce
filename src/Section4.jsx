import { motion } from 'framer-motion';
import image from '../src/assets/left bg.png';

function Section4() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}  // 👈 change here!
      className="left-0 absolute w-full mt-980 lg:mt-900 lg:pt-40"
    >
      <div className="flex flex-col lg:flex-row justify-center gap-20 px-10">
        {/* Animated image block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={image} alt="" className="w-130 rounded mx-auto" />
        </motion.div>

        {/* Animated form block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="font-bold text-5xl text-center">Contact Us</h1>
          <p className="text-gray-400 mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>

          <div className="grid grid-cols-1 gap-5 mt-4 lg:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="border h-15 w-50 md:w-80 pl-5 mx-auto"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border h-15 w-50 md:w-80 pl-5 mx-auto"
            />
            <input
              type="text"
              placeholder="Email address"
              className="border h-15 w-50 md:w-80 pl-5 mx-auto"
            />
            <input
              type="number"
              placeholder="Phone number"
              className="border h-15 w-50 md:w-80 pl-5 mx-auto"
            />
          </div>

          <div className="flex justify-center">
            <textarea
              placeholder="Description"
              className="border h-30 w-50 md:w-80 mt-7 p-5 lg:w-165"
            ></textarea>
          </div>

          <div className="flex flex-col gap-10 items-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.2)' }}
              className="h-15 text-white w-35 bg-green-900"
              style={{ background: '#1E3240' }}
            >
              Get a Quote
            </motion.button>

            <p className="text-gray-300 text-center">
              We don't sell your email and spam
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Section4;
