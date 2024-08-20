import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import styles from '../styles/hero.module.scss';

const functionsImage = [
  {
    name: '智慧投餌系統',
    url: 'feeding.png',
    to: '/#tech',
  },
  {
    name: '智慧觀察網',
    url: 'observation.png',
    to: '/#tech',
  },
  {
    name: '水質檢測系統',
    url: 'water-test.png',
    to: '/#tech',
  },
  {
    name: '專家系統',
    url: 'expert-web.png',
    to: '/#tech',
  },
];
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); // 当组件挂载后，触发动画效果
  }, []);
  return (
    <Background>
      <Section yPadding="pt-8 pb-0">
        <HeroOneButton
          title={
            <>
              {'ID WATER智慧水產養殖專家\n'}
              <span className="text-3xl font-normal">
                提升養殖效率與精準管理的智能自動化解決方案
              </span>
            </>
          }
        />
      </Section>
      <Section yPadding="pt-16 pb-16">
        <div
          className={`flex w-full flex-wrap items-center justify-center ${styles.imageGroup}`}
        >
          {functionsImage.map((image, i) => {
            return (
              <div
                className={`flex flex-col items-center justify-center ${styles.imageBox} ${styles['card-animation']} ${
                  isVisible ? styles['card-animation-enter'] : ''
                } ${styles['card-hover']}`}
                key={`image_${i}`}
              >
                <Link href={image.to}>
                  <img
                    src={`./assets/images/hero/${image.url}`}
                    alt={image.name}
                  />
                </Link>
                <span>{image.name}</span>
              </div>
            );
          })}
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
