import type { ReactNode } from 'react';

type IBackgroundProps = {
  color?: string;
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className={props.color ? props.color : 'bg'}>{props.children}</div>
);

export { Background };
