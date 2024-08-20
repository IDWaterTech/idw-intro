import BackToTopButton from '@/button/BackToTopButton';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { AIot } from './AIot';
import { AquaCultural } from './AquaCultural';
import { Banner } from './Banner';
import { Benefit } from './Benefit';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { InformationTechnology } from './InformationTechnology';
import { Menu } from './Menu';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <BackToTopButton />
    <Menu />
    <Hero />
    <AquaCultural />
    <Benefit />
    <AIot />
    <InformationTechnology />
    <Banner />
    <Footer />
  </div>
);

export { Base };
