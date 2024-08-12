import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Aiot } from './Aiot';
import { Aquacultural } from './Aquacultural';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Aquacultural />
    <Aiot />
    <Banner />
    <Footer />
  </div>
);

export { Base };
