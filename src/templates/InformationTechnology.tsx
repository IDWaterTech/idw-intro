import { useEffect, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); // 当组件挂载后，触发动画效果
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
            className={`my-8 flex w-full flex-wrap items-center justify-center ${styles.imageGroup}`}
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
