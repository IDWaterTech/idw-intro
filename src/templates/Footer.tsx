import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import styles from '../styles/footer.module.scss';

const Footer = () => (
  <Background color="bg-dark-750">
    <Section>
      <div className="flex">
        <img
          src="/assets/images/ID-WATER-LOGO-WHITE.png"
          width={200}
          alt="idwater"
        />
        <div className={styles.description}>
          <div className={styles.title}>艾滴科技</div>
          <div className={styles.subtitle}>
            取代傳統養殖業大面積砍伐紅樹林之需求，亦能降低生產碳排量，具永續性，並提供民眾乾淨且安全的水產品。
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            <img src="/assets/images/phone-outline.png" width={16}></img>
            <span>TEL : 02-2627-2667</span>
          </div>
          <div className={styles.item}>
            <img src="/assets/images/email-outline.png" width={16}></img>
            <span>E-mail : administration@idwater.com.tw</span>
          </div>
          <div className={styles.item}>
            <img src="/assets/images/map-marker-outline.png" width={16}></img>
            <span>
              Address : 6F., No. 335, Ruiguang Rd., Neihu Dist., Taipei City.
            </span>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
