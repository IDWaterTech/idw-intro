import { useEffect, useState } from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import styles from '../styles/hero.module.scss';

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
              <span className="hero-subtitle">打造可信賴的AI智慧養殖系統</span>
            </>
          }
        />
      </Section>
      <Section yPadding="pt-16 pb-16">
        <div className={styles.imageGroup}>
          {functionsImage.map((image, i) => {
            return (
              <div
                className={`${styles.imageBox} ${styles['card-animation']} ${
                  isVisible ? styles['card-animation-enter'] : ''
                } ${styles['card-hover']}`}
                key={`image_${i}`}
              >
                <img src={`/assets/images/${image.url}`} alt={image.name} />
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
