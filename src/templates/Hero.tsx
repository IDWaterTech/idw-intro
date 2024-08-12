import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import styles from '../styles/hero.module.scss';
const navbarList = [{
  id:1,
  name: 'ABOUT',
},{
  id:2,
  name: 'TECHNIQUE',
},{
  id:3,
  name: 'DESCRIPTION',
}]
const functionsImage= [{
  name:'即時監測',
  url:'/assests/images/alert.png'
},{
  name:'數據分析',
  url:'/assests/images/chart.png'
},{
  name:'AI養殖',
  url:'/assests/images/ai.png'
},{
  name:'養成計畫',
  url:'/assests/images/daily.png'
},{
  name:'紀錄日誌',
  url:'/assests/images/calendar.png'
}]
const Hero = () => (
  <Background>
    <Section yPadding="py-0 px-0" navbar="true">
      <NavbarTwoColumns logo={<Logo xl />}>
        {
          navbarList.map((nav)=>{
            return (
              <li className={styles.listItem} key={nav.id}>
                {nav.name}
              </li>
            );
          })
        }
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

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'ID Water 專家系統\n'}
            <span className="hero-subtitle">打造可信賴的AI智慧養殖系統</span>
          </>
        }
      />
    </Section>
  </Background>
);

export { Hero };
