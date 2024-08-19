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
                background-image:url(./assets/images/hero-bg.png);
                background-size: auto 100vh;
                background-position: center;
                background-repeat: no-repeat;
              }
          }
        `}
    </style>
    <div
      // eslint-disable-next-line no-nested-ternary, eqeqeq
      className={`${props.color ? (props.color == 'bg-transparent' ? 'nav-bg absolute left-0 top-0 w-full' : `${props.color} relative`) : 'bg relative'}`}
    >
      {props.children}
    </div>
  </div>
);

export { Background };
