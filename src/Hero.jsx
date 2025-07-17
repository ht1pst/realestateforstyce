import { motion } from "framer-motion";
import houseImage from '../src/assets/House 1.png';

function Hero() {
  return (
    <section id='home' className="w-full absolute left-0 mt-15" style={{ background: 'rgb(181, 224, 238)' }}>
      <div className='flex flex-col lg:flex-row justify-center md:px-20 px-7 lg:gap-10'>

        {/* TEXT SECTION */}
        <motion.div
          className='pt-30 max-w-2xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            className='text-6xl lg:text-8xl leading-tight font-bold'
            style={{ color: '#1E3240' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            A home is build with love and dreams
          </motion.h1>

          <motion.p
            className='text-lg lg:text-xl mt-3'
            style={{ color: '#1E3240' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Real estate farm that makes your dreams true.
          </motion.p>

          <motion.div
            className='flex gap-6 mt-7'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button className='h-15 text-white w-35 bg-green-900' style={{ background: '#1E3240' }}>Our Projects</button>
            <button className='h-15 bg-transparent text-black w-35 border' style={{ borderColor: '#1E3240' }}>Contact Us</button>
          </motion.div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.img
          src={houseImage}
          alt="House"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        />

      </div>
    </section>
  );
}

export default Hero;
