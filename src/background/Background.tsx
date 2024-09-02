import type { ReactNode } from 'react';

type IBackgroundProps = {
  color?: string;
  children: ReactNode;
};
// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''; // 从环境变量中获取 basePath

const Background = (props: IBackgroundProps) => (
  <div>
    <style>
      {`
          .bg {
                background-image:url(./assets/images/hero/hero-bg.png);
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              }
          }
        `}
    </style>
    <div
      // 紅樹林圖片
      // https://images.unsplash.com/photo-1623719647321-188ae37d7133?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1024
      // https://images.unsplash.com/photo-1520333764090-778d6dc95ec3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920
      // eslint-disable-next-line no-nested-ternary, eqeqeq
      className={`${props.color ? (props.color == 'bg-transparent' ? 'nav-bg absolute left-0 top-0 w-full' : `${props.color} relative`) : 'bg relative'}`}
    >
      {props.children}
    </div>
  </div>
);

export { Background };
