import styles from '../styles/title.module.scss';

type ISectionProps = {
  title?: string;
  subTitle?: string;
  decoration?: string;
  center?: string;
};

const TitleTag = (props: ISectionProps) => (
  <div
    // eslint-disable-next-line eqeqeq
    className={`${styles.titleBox} ${props.center == 'true' ? 'relative' : ''}`}
  >
    <div
      // eslint-disable-next-line eqeqeq
      className={`${styles.titleText} ${props.center == 'true' ? 'w-full' : ''}`}
    >
      <div
        // eslint-disable-next-line eqeqeq
        className={`font-black ${styles.title} ${props.center == 'true' ? 'text-center' : ''}`}
      >
        {props.title}
      </div>
      <div
        // eslint-disable-next-line eqeqeq
        className={`font-black ${styles.subtitle} ${props.center == 'true' ? 'w-full text-center' : ''}`}
      >
        {props.subTitle}
      </div>
    </div>
    <div
      // eslint-disable-next-line eqeqeq
      className={`font-bold ${styles.decoration} ${props.center == 'true' ? 'absolute right-60 top-0' : ''}`}
    >
      {props.decoration}
    </div>
  </div>
);

export { TitleTag };
