import React from 'react';

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
    <div className={`grid grid-cols-12 gap-x-2 ${posit} bg-white shadow-2xl`}>
      <div className="col-span-12 rounded-t-3xl">
        <img
          className="h-[200px] w-full rounded-t-3xl object-cover p-8"
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="col-span-12 mx-2 p-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <span
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        ></span>
      </div>
    </div>
  );
};

export default CardIntro;
