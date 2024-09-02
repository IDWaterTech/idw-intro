import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import styles from '../styles/hero.module.scss';
import { Logo } from './Logo';

const navbarList = [
  {
    id: 1,
    name: 'About',
    url: '/',
  },
  {
    id: 2,
    name: 'AIot',
    url: '/#tech',
  },
  {
    id: 3,
    name: 'SaaS',
    url: '/#saas',
  },
  {
    id: 4,
    name: 'Contact',
    url: '/#footer',
  },
];

const Menu = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <style>
        {`
          .scrolled {
                position: fixed;
                top: 0;
                z-index: 1000; /* 確保 header 位於其他內容之上 */
                background-color: #fff; /* 更改背景顏色 */
                padding: 10px 0; /* 改變內邊距，縮小 header */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加陰影以區分 header 和內容 */
                width: 100%;
                height: 64px;
              }
          }
        `}
      </style>
      <div ref={headerRef}>
        <Background color="bg-transparent">
          <Section yPadding="py-0 px-0" navbar="true">
            <NavbarTwoColumns logo={<Logo xl />}>
              {navbarList.map((nav) => {
                return (
                  <li
                    className={`mx-2 cursor-pointer text-base font-medium ${styles.listItem}`}
                    key={nav.id}
                  >
                    <Link href={nav.url}>{nav.name}</Link>
                  </li>
                );
              })}
            </NavbarTwoColumns>
          </Section>
        </Background>
      </div>
    </div>
  );
};
export { Menu };
