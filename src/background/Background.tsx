import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
  <div className="bg">{props.children}</div>
);

export { Background };
