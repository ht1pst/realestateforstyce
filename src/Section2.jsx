import { motion } from 'framer-motion';
import image from '../src/assets/image.jpg';

function Section2() {
  return (
    <section id='about' className='left-0 absolute w-full mt-280 md:mt-320 lg:mt-200 lg:pt-70'>
      <div className='flex flex-col lg:flex-row justify-center gap-10 lg:gap-50 px-5 md:px-30'>

        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={image} alt="" className="w-90 h-70 md:w-120 md:h-100 rounded" />
        </motion.div>

        {/* Text and stats animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h1 className='text-5xl font-semi-bold lg:w-120 lg:text-7xl'>
            Award winning real estate company in Dubai
          </h1>
          <p className='text-lg text-gray-300 mt-10'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis <br />
            facere, eum possimus voluptatem cum expedita architecto repudiandae <br />
            saepe earum quibusdam.
          </p>

          <div className='flex mt-10 lg:gap-10'>
            {[
              { label: 'PREVIOUS PROJECTS', value: '34+' },
              { label: 'YEARS EXPERIENCE', value: '20y' },
              { label: 'ONGOING PROJECTS', value: '12' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <p style={{ color: '#AFD4E2' }}>{item.label}</p>
                <h1 className='text-4xl mt-2'>{item.value}</h1>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Section2;
