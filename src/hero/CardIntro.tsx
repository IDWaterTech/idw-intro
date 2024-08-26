import React, { useEffect, useRef } from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  rightAnglesPosit?: number; // 直角保留 全部0 左上1 右上2 左下3 右下4 全園5
}

const CardIntro: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  rightAnglesPosit = 0,
}) => {
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

  let posit = '';
  switch (rightAnglesPosit) {
    case 0: // 全部都直角
      posit = '';
      break;
    case 1: // 左上是直角，其他圓角
      posit = 'rounded-b-3xl rounded-tr-3xl';
      break;
    case 2: // 右上是直角，其他圓角
      posit = 'rounded-b-3xl rounded-tl-3xl';
      break;
    case 3: // 左下是直角，其他圓角
      posit = 'rounded-t-3xl rounded-br-3xl';
      break;
    case 4: // 右下是直角，其他圓角
      posit = 'rounded-t-3xl rounded-bl-3xl';
      break;
    case 5: // 全部圓角
      posit = 'rounded-3xl';
      break;
    default:
      break;
  }
  return (
    <div
      ref={cardRef}
      className={`mx-2 grid grid-cols-12 p-4 ${posit} bg-white shadow-lg max-[768px]:rounded-3xl`}
    >
      <div className="col-span-12 rounded-t-3xl">
        <img
          className="h-[200px] w-full rounded-t-3xl object-cover p-6"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="col-span-12 mx-2 p-4">
        <h3 className="mb-2 text-xl font-bold text-dark-900">{title}</h3>
        <span
          className="text-dark-900"
          dangerouslySetInnerHTML={{ __html: description }}
        ></span>
      </div>
    </div>
  );
};

export default CardIntro;
