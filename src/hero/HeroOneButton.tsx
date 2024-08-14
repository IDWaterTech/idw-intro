import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="hero-title whitespace-pre-line text-5xl font-black leading-hero">
      {props.title}
    </h1>
  </header>
);

export { HeroOneButton };
