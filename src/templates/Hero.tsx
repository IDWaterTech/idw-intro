import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import styles from '../styles/hero.module.scss';
import { Logo } from './Logo';

const navbarList = [
  {
    id: 1,
    name: 'ABOUT',
  },
  {
    id: 2,
    name: 'TECHNIQUE',
  },
  {
    id: 3,
    name: 'DESCRIPTION',
  },
];
const functionsImage = [
  {
    name: '即時監測',
    url: 'alert.png',
  },
  {
    name: '數據分析',
    url: 'chart.png',
  },
  {
    name: 'AI養殖',
    url: 'ai.png',
  },
  {
    name: '養成計畫',
    url: 'daily.png',
  },
  {
    name: '紀錄日誌',
    url: 'calendar.png',
  },
];
const Hero = () => (
  <Background>
    <Section yPadding="py-0 px-0" navbar="true">
      <NavbarTwoColumns logo={<Logo xl />}>
        {navbarList.map((nav) => {
          return (
            <li className={styles.listItem} key={nav.id}>
              {nav.name}
            </li>
          );
        })}
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-8 pb-0">
      <HeroOneButton
        title={
          <>
            {'ID Water 專家系統\n'}
            <span className="hero-subtitle">打造可信賴的AI智慧養殖系統</span>
          </>
        }
      />
    </Section>
    <Section yPadding="pt-16 pb-16">
      <div className={styles.imageGroup}>
        {functionsImage.map((image, i) => {
          return (
            <div className={styles.imageBox} key={`image_${i}`}>
              <img src={`/assets/images/${image.url}`} alt={image.name} />
              <span>{image.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  </Background>
);

export { Hero };
