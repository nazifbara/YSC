import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';

import Header from './Header';

import './App.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import yscF1 from './images/ysc-f1.png';
import yscF2 from './images/ysc-f2.png';
import yscF3 from './images/ysc-f3.png';
import yscGroup from './images/ysc-group.jpeg';

SwiperCore.use([Autoplay, Pagination]);

const flyers = [yscF1, yscF2, yscF3];

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <div className="hero container">
            <div style={{ width: '100%' }}>
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
          </div>
        </div>
        <div>
          <section className="container about">
            <h2 id="about">Qui sommes-nous?</h2>
            <h3 style={{ marginBottom: '30px' }}>
              Un Laboratoire de langues, de développement personnel et
              changement de la mentalité.
            </h3>
            <div className="about-content">
              <p>
                Nous sommes un Laboratoire de langues basé sur non seulement la
                formation en langues mais aussi nous nous soucions de
                l’épanouissement de nos apprenants à travers différentes
                formations et communication en développement personnel
                aboutissant à un changement de mentalité.
              </p>
              <div>
                <img src={yscGroup} alt="ysc people" />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="container">
            <h2 id="why">Pourquoi existons-nous?</h2>
            <div>
              <p>
                <strong>YSC</strong> se veut une nouvelle génération épanouie,
                aguerrie et armée pour relever les défis du siècle. Nous sommes
                parties du fait que, l’avancé de la technologie, le besoin de
                mieux réussir dans le domaine de la recherche scientifique et
                littéraire, l’urgence et la nécessité d’entreprendre demeurent
                des secteurs d’activités autours desquelles gravitent le
                développement mondial.
              </p>
              <p>
                Par ailleurs la langue anglaise étant devenu le noyau de la
                communication dans presque tous secteurs d’activités, YSC se
                lance dans un dynamisme de répondre à la question de
                l’apprentissage de la langue anglaise. A travers des formations
                diverse de renforcement de capacité (competence building), des
                formations de préparation aux tests internationaux, des
                communications et présentations sur comment postulé aux bourses
                d’études… nous pensons contribuer au développement personnel et
                commun de nos populations.{' '}
              </p>
              <div>
                <img src={yscGroup} alt="ysc people" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
