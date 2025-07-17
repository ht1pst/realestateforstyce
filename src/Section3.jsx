import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '../src/assets/left bg2.png';
import image2 from '../src/assets/left bg3.png';
import image3 from '../src/assets/leftbg4.png';

const projects = [
  {
    name: 'Vintage Villa',
    address: '2715 Ash Dr. San Jose, Dubai',
    image: image1,
  },
  {
    name: 'Tonga Villa',
    address: '1901 Thornridge Cir. Shiloh B10063',
    image: image2,
  },
  {
    name: 'Penthouse',
    address: '2464 Royal Ln. Mesa, 45463',
    image: image3,
  },
  {
    name: 'Smart City Property',
    address: '2715 Ash Dr. San Jose',
    image: image3,
  },
];

function Section3() {
  return (
    <motion.section
      id='projects'
      className="bg-white absolute left-0 w-full mt-520 md:mt-550 lg:mt-400 lg:pt-60"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-[#1E3240] lg:text-5xl">Ongoing projects</h2>
        <p className="text-gray-500 mt-2 md:text-xl lg:text-2xl">Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <img src={project.image} alt={project.name} className="w-full h-100 object-cover rounded" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#1E3240]">{project.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.address}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Section3;
