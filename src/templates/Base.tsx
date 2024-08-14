import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { AIot } from './AIot';
import { AquaCultural } from './AquaCultural';
import { Banner } from './Banner';
import { Benefit } from './Benefit';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <AquaCultural />
    <Benefit />
    <AIot />
    <Banner />
    <Footer />
  </div>
);

export { Base };
