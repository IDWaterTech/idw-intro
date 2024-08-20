import React, { useState } from 'react';

import styles from '../styles/infoCard.module.scss';

interface CardProps {
  imageSrc?: string;
  title: string;
  description: string;
  infoSrc: string;
  info: string;
}
// eslint-disable-next-line unused-imports/no-unused-vars
// let isShow = false;
// const showInfo = () => {
//   isShow = true;
//   console.log('mouseEnter', isShow);
// };
// const hideInfo = () => {
//   isShow = false;
//   console.log('mouseLeave', isShow);
// };
// eslint-disable-next-line @typescript-eslint/no-shadow
const CardIntro: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  infoSrc,
  info,
}) => {
  const [isShow, setIsShow] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const showInfo = () => {
    setIsShow(!isShow);
  };
  return (
    <div
      className={`${styles.card} mx-2`}
      onMouseLeave={showInfo}
      onMouseEnter={showInfo}
    >
      {isShow ? (
        <>
          <div
            className={`grid w-full grid-cols-12 rounded-3xl bg-white p-4 shadow-lg  ${styles.info}`}
          >
            <div className="col-span-4 flex items-start justify-center">
              <div className="w-full">
                <img
                  className="w-full object-cover"
                  src={infoSrc}
                  alt={title}
                />
              </div>
            </div>
            <div className="col-span-8 p-4">
              <h3 className="mb-2 text-xl font-bold text-dark-900">{title}</h3>
              <span
                className="text-sm text-dark-900"
                dangerouslySetInnerHTML={{ __html: info }}
              ></span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`grid size-full grid-cols-12 rounded-3xl bg-white p-4 shadow-lg ${styles.cardHover}`}
          >
            <div className="col-span-4 flex items-start justify-center">
              <div className="size-24 overflow-hidden rounded-full">
                <img
                  className="size-full object-cover"
                  src={imageSrc}
                  alt={title}
                />
              </div>
            </div>
            <div className="col-span-8 p-4">
              <h3 className="mb-2 text-xl font-bold text-dark-900">{title}</h3>
              <span
                className="text-dark-900"
                dangerouslySetInnerHTML={{ __html: description }}
              ></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardIntro;
