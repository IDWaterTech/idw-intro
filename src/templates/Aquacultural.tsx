import Image from 'next/image';

import { Section } from '@/layout/Section';

const Aquacultural = () => (
  <Section
    title="Sponsors"
    description="Our sponsors' exceptional support has made this project possible."
  >
    <a
      href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
      target="_blank"
    >
      <Image
        src="/assets/images/sentry-dark.png"
        alt="Sentry"
        width={260}
        height={224}
      />
    </a>
  </Section>
);
export { Aquacultural };
