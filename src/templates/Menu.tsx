import Link from 'next/link';

import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import styles from '../styles/hero.module.scss';
import { Logo } from './Logo';

const navbarList = [
  {
    id: 1,
    name: 'ABOUT',
    url: '/',
  },
  {
    id: 2,
    name: 'TECHNIQUE',
    url: '/#tech',
  },
  {
    id: 3,
    name: 'DESCRIPTION',
    url: '/#des',
  },
];
const Menu = () => {
  return (
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
    </Background>
  );
};
export { Menu };
