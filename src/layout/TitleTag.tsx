import styles from '../styles/title.module.scss';

type ISectionProps = {
  title?: string;
  subTitle?: string;
  decoration?: string;
};

const TitleTag = (props: ISectionProps) => (
  <div className={styles.titleBox}>
    <div className={styles.titleText}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.subtitle}>{props.subTitle}</div>
    </div>
    <div className={styles.decoration}>{props.decoration}</div>
  </div>
);

export { TitleTag };
