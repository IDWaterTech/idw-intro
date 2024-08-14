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
    className={`relative flex ${styles.titleBox}`}
  >
    <div
      // eslint-disable-next-line eqeqeq
      className={`w-full ${styles.titleText}`}
    >
      <div
        // eslint-disable-next-line eqeqeq
        className={`text-center text-3xl font-black ${styles.title}`}
      >
        {props.title}
      </div>
      <div
        // eslint-disable-next-line eqeqeq
        className={`font-black ${styles.subtitle} w-full text-center text-2xl`}
      >
        {props.subTitle}
      </div>
    </div>
    {/* <div
      // eslint-disable-next-line eqeqeq
      className={`font-black ${styles.decoration} absolute right-60 top-0`}
    >
      {props.decoration}
    </div> */}
  </div>
);

export { TitleTag };
