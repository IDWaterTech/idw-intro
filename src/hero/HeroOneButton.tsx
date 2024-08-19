import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="mt-8 whitespace-pre-line text-4xl font-black leading-hero text-white">
      {props.title}
    </h1>
  </header>
);

export { HeroOneButton };
