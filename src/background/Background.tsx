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
                background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(./assets/images/hero-bg.png);
                background-size: auto 100vh;
                background-position: center;
                background-repeat: no-repeat;
              }
          }
        `}
    </style>
    <div className={`relative ${props.color ? props.color : 'bg'}`}>
      {props.children}
    </div>
  </div>
);

export { Background };
