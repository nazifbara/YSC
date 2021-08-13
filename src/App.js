import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

import Header from './Header';

import './App.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import yscF1 from './images/ysc-f1.png';
import yscF2 from './images/ysc-f2.png';
import yscF3 from './images/ysc-f3.png';

SwiperCore.use([Autoplay, Pagination]);

const flyers = [yscF1, yscF2, yscF3];

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-red">
          <div className="container">
            <section className="hero">
              <div className="flyers">
                <Swiper
                  spaceBetween={10}
                  centeredSlides={true}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                  }}
                >
                  {flyers.map((f) => (
                    <SwiperSlide key={f}>
                      <img src={f} alt="flyer" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div>
                <h1>Vous rêver de parler anglais ?</h1>
                <h3>Bienvenu sur notre site web !</h3>
                <p>
                  Ici, nous avons une méthode, des experts, pour vous amener à
                  réliser très vite ce rêve.
                </p>
                <button className="cta">Passez à l’action !</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
