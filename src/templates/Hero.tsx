import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import styles from '../styles/hero.module.scss';

const functionsImage = [
  {
    name: '智慧投餌系統',
    url: 'feeding.png',
  },
  {
    name: '智慧觀察網',
    url: 'observation.png',
  },
  {
    name: '水質檢測系統',
    url: 'water.png',
  },
  {
    name: '專家系統',
    url: 'expert-web.png',
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
              {'ID Water 專家系統\n'}
              <span className="text-3xl font-normal">
                打造可信賴的AI智慧養殖系統
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
                <img
                  src={`./assets/images/hero/${image.url}`}
                  alt={image.name}
                />
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
