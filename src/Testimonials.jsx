// Testimonials.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import person from '../src/assets/image2.jpg';

const testimonials = [
  {
    name: 'Brooklyn Simmons',
    role: 'Artist',
    quote: 'Dream house isn’t dream anymore',
    detail: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
    image: person,
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Artist',
    quote: 'Dream house isn’t dream anymore',
    detail: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
    image: person,
  },
   {
    name: 'Brooklyn Simmons',
    role: 'Artist',
    quote: 'Dream house isn’t dream anymore',
    detail: 'Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar.',
    image: person,
  },
];

function Testimonials() {
  return (
    <section className="bg-white mt-700 md:mt-730 lg:mt-700 left-0 absolute w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1E3240] lg:text-5xl">Few smiles and comment</h2>
        <p className="text-gray-500 mt-2 lg:text-xl">Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
      </div>

      <div className="mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={30}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-8 items-center justify-center mt-10">
                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-94 h-74 object-cover rounded-md"
                />

                {/* Text */}
                <div className="max-w-xl mt-20 md:mt-20 lg:mt-0">
                  <span className="text-7xl text-blue-300">“</span>
                  <h3 className="text-4xl font-bold text-[#1E3240] mt-2 mb-2">{t.quote}</h3>
                  <p className="text-gray-500 mb-4 text-xl">{t.detail}</p>
                  <p className="font-semibold  text-xl">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
