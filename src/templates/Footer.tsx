import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import styles from '../styles/footer.module.scss';

const Footer = () => (
  <Background color="bg-dark-750">
    <Section>
      <div className={`${styles.footerContainer} flex`}>
        <div className="flex flex-1">
          <img
            src="/assets/images/ID-WATER-LOGO-WHITE.png"
            width={200}
            alt="idwater"
          />
          <div className={styles.description}>
            <div className={styles.title}>艾滴科技</div>
            <div className={styles.subtitle}>
              用科技引領全球
              <br />
              使永續農業變得更簡單
            </div>
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/company/id-water-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.idwater.com.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2903_206)">
                    <g clipPath="url(#clip1_2903_206)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 0C2.68629 0 0 2.68629 0 6V26C0 29.3137 2.68629 32 6 32H26C29.3137 32 32 29.3137 32 26V6C32 2.68629 29.3137 0 26 0H6ZM16.6563 5.24407C16.2805 4.91864 15.7227 4.91864 15.347 5.24407L4.34735 14.77C3.64745 15.3762 4.07612 16.526 5.002 16.526H8.08975V26.6075C8.08975 27.1598 8.53747 27.6075 9.08975 27.6075H22.8882C23.4405 27.6075 23.8882 27.1598 23.8882 26.6075V16.526H27.0013C27.9271 16.526 28.3558 15.3762 27.6559 14.77L16.6563 5.24407ZM13.2354 19.7034H18.8777V27.6026H13.2354V19.7034Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2903_206">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_2903_206">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.104.com.tw/company/1a2x6bkns9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2905_217)">
                    <path
                      d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
                      fill="white"
                    />
                    <g clipPath="url(#clip1_2905_217)">
                      <path
                        d="M16.4203 15.7602H18.4054C18.4064 14.5053 18.0062 13.2845 17.2659 12.2836C16.5256 11.2828 15.4856 10.5567 14.3044 10.2161C13.1232 9.87547 11.8655 9.93889 10.7228 10.3967C9.58012 10.8545 8.61509 11.6817 7.97467 12.7522V10.0093H5.9851L4 12.039H5.9851V21.5293H7.97467V18.7864C7.43039 17.8833 7.14101 16.8438 7.13858 15.783C7.13829 14.6311 7.55018 13.519 8.29657 12.6562L8.35021 12.5967C8.46899 12.4608 8.5959 12.3326 8.73023 12.2127C8.85033 12.1043 8.97569 12.0021 9.1058 11.9064L9.1371 11.8836C9.28031 11.7784 9.42962 11.6823 9.5842 11.5956C9.72892 11.5176 9.87824 11.4489 10.0313 11.3899L10.1699 11.335C10.2861 11.2939 10.4024 11.2527 10.5231 11.2207L10.693 11.175C10.8152 11.1476 10.9359 11.1247 11.0551 11.1064L11.2161 11.079C11.3943 11.059 11.5733 11.0483 11.7526 11.047C12.0179 11.0483 12.2827 11.0727 12.544 11.1202H12.6423L12.772 11.1522C13.1524 11.238 13.5205 11.3732 13.8674 11.5544C13.9926 11.623 14.1133 11.6916 14.2295 11.7693L14.2608 11.7922C14.3681 11.8653 14.4754 11.9384 14.5782 12.0207L14.6051 12.0436C14.7079 12.1259 14.8063 12.2082 14.9002 12.2996L14.927 12.3224C15.0209 12.4139 15.1147 12.5099 15.1997 12.6059L15.2265 12.6424C15.31 12.7369 15.3904 12.8375 15.4679 12.9442C15.4992 12.9853 15.5261 13.0356 15.5574 13.0813C15.5887 13.127 15.6602 13.223 15.7049 13.3007C15.7496 13.3784 15.7899 13.4607 15.8346 13.543C15.8625 13.5887 15.8879 13.636 15.9106 13.6847C15.9547 13.7752 15.9935 13.8684 16.0268 13.9636C16.0474 14.0035 16.0653 14.0447 16.0805 14.087C16.131 14.2201 16.1743 14.3559 16.2101 14.4939C16.2923 14.7831 16.3447 15.0804 16.3666 15.3807C16.3734 15.5086 16.3734 15.6368 16.3666 15.7647M25.6259 17.4562V10.0047H25.2951L16.3532 19.1476H23.6498V21.5202H25.6349V19.1476H27.9553V17.4516L25.6259 17.4562ZM23.6408 17.4562H20.3234L23.6408 14.0687V17.4562Z"
                        fill="#686868"
                      />
                      <path
                        d="M16.3972 19.1473L18.1856 17.3187C18.3239 16.8142 18.3946 16.2929 18.3957 15.769H16.4106C16.4106 16.7571 16.0267 17.7047 15.3434 18.4035C14.66 19.1022 13.7332 19.4947 12.7668 19.4947C11.8004 19.4947 10.8736 19.1022 10.1902 18.4035C9.50689 17.7047 9.12299 16.7571 9.12299 15.769C9.12181 15.2795 9.21509 14.7947 9.39746 14.3422C9.57982 13.8896 9.8477 13.4783 10.1858 13.1318C10.5238 12.7853 10.9254 12.5104 11.3675 12.3228C11.8097 12.1352 12.2837 12.0387 12.7623 12.0387C13.6644 12.0394 14.5342 12.3819 15.2038 12.9999C15.8734 13.6178 16.2954 14.4676 16.3883 15.385C16.2972 14.1603 15.7447 13.0195 14.8473 12.203C13.9499 11.3865 12.7776 10.958 11.5774 11.0078C10.3771 11.0576 9.24259 11.5817 8.41281 12.4699C7.58303 13.358 7.12276 14.5407 7.12897 15.769C7.12876 16.9841 7.50469 18.1682 8.20293 19.1515C8.90117 20.1348 9.88589 20.8669 11.016 21.2429C12.1461 21.6189 13.3636 21.6196 14.4941 21.2448C15.6246 20.87 16.61 20.139 17.3093 19.1564L16.3972 19.1473Z"
                        fill="#FF7800"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_2905_217">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_2905_217">
                      <rect
                        width="24"
                        height="11.52"
                        fill="white"
                        transform="translate(4 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            {/* <img src="/assets/images/phone-outline.png" width={16}></img> */}
            <span>TEL : 02-2627-2667</span>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            {/* <img src="/assets/images/email-outline.png" width={16}></img> */}
            <span>E-mail : administration@idwater.com.tw</span>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            {/* <img src="/assets/images/map-marker-outline.png" width={16}></img> */}
            <span>
              {`Address : 6F., No. 335, Ruiguang Rd., Neihu Dist., Taipei City.`}
            </span>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
