import React from 'react';

interface CardProps {
  imageSrc?: string;
  title: string;
  description: string;
  rightAnglesPosit?: number; // 直角保留 全部0 左上1 右上2 左下3 右下4 全園5
  isAIot?: string;
}

const CardIntro: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  rightAnglesPosit = 5,
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
    <div className={`grid grid-cols-12 p-4 ${posit} w-full bg-white shadow-lg`}>
      {imageSrc ? (
        <div className="col-span-4 flex items-center justify-center">
          <div className="size-24 overflow-hidden rounded-full">
            <img
              className="size-full object-cover"
              src={imageSrc}
              alt={title}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className={` p-4 ${imageSrc ? 'col-span-8' : 'col-span-12'}`}>
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
