import { useEffect, useRef } from 'react';

import { TitleTag } from '@/layout/TitleTag';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import styles from '../styles/informationTechnology.module.scss';

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
const InformationTechnology = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardTop = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight) {
          cardRef.current.style.opacity = '1';
          cardRef.current.style.transform = 'translateY(0)';
          cardRef.current.style.transition =
            'opacity 1s ease-out, transform 1s ease-out';
        } else {
          cardRef.current.style.opacity = '0';
          cardRef.current.style.transform = 'translateY(100px)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id="saas">
      <Background color="bg-primary-200">
        <Section>
          <TitleTag
            title="SaaS資訊服務"
            subTitle="智慧管理、資訊加值"
            decoration="Information Technology"
          ></TitleTag>
          <div
            ref={cardRef}
            className={`my-8 flex w-full flex-wrap items-center justify-center ${styles.imageGroup}`}
          >
            {functionsImage.map((image, i) => {
              return (
                <div
                  className={`flex flex-col items-center justify-center ${styles.imageBox}`}
                  key={`image_${i}`}
                >
                  <img
                    src={`./assets/images/information/${image.url}`}
                    alt={image.name}
                  />
                  <span className={styles.name}>{image.name}</span>
                </div>
              );
            })}
          </div>
        </Section>
      </Background>
    </div>
  );
};

export { InformationTechnology };
