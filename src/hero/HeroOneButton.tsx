import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero hero-title">
      {props.title}
    </h1>
  </header>
);

export { HeroOneButton };
