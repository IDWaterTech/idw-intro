import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  {
    title: '數據分析',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.96 11.31C10.82 8.1 11.5 6 13 6C14.5 6 15.18 8.1 16.04 11.31C17 14.92 18.1 19 22 19V17C19.8 17 19 14.54 17.97 10.8C17.08 7.46 16.15 4 13 4C9.85 4 8.92 7.46 8.03 10.8C7.03 14.54 6.2 17 4 17V2H2V22H22V20H4V19C7.9 19 9 14.92 9.96 11.31Z" fill="#006AA6"/></svg>',
  },
  {
    title: '智慧通報',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4C9.99298 4.09654 9.99298 4.19346 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H21V19L19 17V11C19 7.82 16.88 5.14 14 4.29C14.007 4.19346 14.007 4.09654 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2ZM12 6C13.3261 6 14.5979 6.52678 15.5355 7.46447C16.4732 8.40215 17 9.67392 17 11V18H7V11C7 9.67392 7.52678 8.40215 8.46447 7.46447C9.40215 6.52678 10.6739 6 12 6ZM21 7V13H23V7H21ZM21 15V17H23V15H21ZM10 21C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23C12.5304 23 13.0391 22.7893 13.4142 22.4142C13.7893 22.0391 14 21.5304 14 21H10Z" fill="#006AA6"/></svg>',
  },
  {
    title: '即時監測',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM12 4.5C17 4.5 21.27 7.61 23 12C22.75 12.65 22.44 13.26 22.08 13.85C21.5 13.5 20.86 13.25 20.18 13.12L20.82 12C19.17 8.64 15.76 6.5 12 6.5C8.24 6.5 4.83 8.64 3.18 12C4.83 15.36 8.24 17.5 12 17.5L13.21 17.43C13.07 17.93 13 18.46 13 19V19.46L12 19.5C7 19.5 2.73 16.39 1 12C2.73 7.61 7 4.5 12 4.5Z" fill="#006AA6"/></svg>',
  },
  {
    title: '降低成本',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 15H9C9 16.08 10.37 17 12 17C13.63 17 15 16.08 15 15C15 13.9 13.96 13.5 11.76 12.97C9.64 12.44 7 11.78 7 9C7 7.21 8.47 5.69 10.5 5.18V3H13.5V5.18C15.53 5.69 17 7.21 17 9H15C15 7.92 13.63 7 12 7C10.37 7 9 7.92 9 9C9 10.1 10.04 10.5 12.24 11.03C14.36 11.56 17 12.22 17 15C17 16.79 15.53 18.31 13.5 18.82V21H10.5V18.82C8.47 18.31 7 16.79 7 15Z" fill="#006AA6"/></svg>',
  },
  {
    title: '增加存活率',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 16.5L3 19.44V11H6M11 14.66L9.43 13.32L8 14.64V7H11M16 13L13 16V3H16M18.81 12.81L17 11H22V16L20.21 14.21L13 21.36L9.53 18.34L5.75 22H3L9.47 15.66L13 18.64" fill="#006AA6"/></svg>',
  },
  {
    title: '減少人力',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H0V10H8V12Z" fill="#006AA6"/></svg>',
  },
  {
    title: '增加收成率',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.11 5H21V3H3V5H4.89C3.11 6.8 2 9.27 2 12C2 15.97 4.31 19.39 7.66 21H16.34C19.69 19.39 22 15.97 22 12C22 9.27 20.89 6.8 19.11 5ZM6.32 6.41L7.7 5H16.3L17.68 6.41C18.23 6.96 18.69 7.58 19.05 8.25C18 8.09 16.94 7.66 16 7C13.56 8.71 10.44 8.71 8 7C7.06 7.66 6 8.09 4.95 8.25C5.31 7.58 5.77 6.96 6.32 6.41ZM15.85 19H8.15C5.58 17.59 4 14.95 4 12C4 11.43 4.07 10.86 4.19 10.32C5.5 10.29 6.8 9.95 8 9.33C10.5 10.63 13.5 10.63 16 9.33C17.2 9.95 18.5 10.29 19.81 10.32C19.93 10.86 20 11.43 20 12C20 14.95 18.42 17.59 15.85 19ZM17 14.5C17 15.88 15.32 17 13.25 17C12.09 17 11.06 16.64 10.33 16.16C9.67 17 8.33 17 7 17C8.1 17 8.5 15.88 8.5 14.5C8.5 13.12 8.1 12 7 12C8.33 12 9.67 12 10.37 12.91C11.06 12.36 12.09 12 13.25 12C15.32 12 17 13.12 17 14.5Z" fill="#006AA6"/></svg>',
  },
  {
    title: '降低死亡率',
    svg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.28937 5.09047L6.83938 3.64047C8.29938 2.61047 10.0794 2.00047 11.9994 2.00047C16.9694 2.00047 20.9994 6.03047 20.9994 11.0005V17.8005L18.9994 15.8005V11.0005C18.9994 7.14047 15.8594 4.00047 11.9994 4.00047C10.6294 4.00047 9.35938 4.40047 8.28937 5.09047ZM22.1094 21.4605L20.8394 22.7305L17.5594 19.4505L14.9994 22.0005L11.9994 19.0005L8.99937 22.0005L5.99937 19.0005L2.99937 22.0005V11.0005C2.99937 9.26047 3.49937 7.63047 4.35938 6.25047L1.10938 3.00047L2.38938 1.73047L6.88937 6.23047L8.68937 8.03047L10.9694 10.3105L17.4094 16.7605H17.4194L20.9994 20.3405V20.3505L22.1094 21.4605ZM16.1394 18.0305L9.88938 11.7805C9.61938 11.9205 9.31938 12.0005 8.99937 12.0005C7.89937 12.0005 6.99937 11.1105 6.99937 10.0005C6.99937 9.68047 7.07937 9.38047 7.21937 9.11047L5.81938 7.71047C5.29938 8.69047 4.99937 9.81047 4.99937 11.0005V17.1705L5.99937 16.1705L7.40937 17.5905L8.99937 19.1705L10.5894 17.5905L11.9994 16.1705L13.4094 17.5905L14.9994 19.1705L16.1394 18.0305ZM14.9994 8.00047C13.9594 8.00047 13.1094 8.80047 12.9994 9.82047L15.1794 12.0005C16.1994 11.8905 16.9994 11.0405 16.9994 10.0005C16.9994 8.90047 16.1094 8.00047 14.9994 8.00047Z" fill="#006AA6"/></svg>',
  },
];

const Benefit = () => (
  <>
    <Background color="bg-primary-200">
      <Section>
        <TitleTag
          title="8大優勢"
          subTitle="省時省力又省錢"
          decoration="Benefit"
          center="true"
        ></TitleTag>
        <div className="content flex py-8">
          {/* <div className="imgBox mx-2">
            <img src="/assets/images/menu.png" alt=""></img>
          </div> */}
          <div className="svgGroup grid w-full grid-cols-4">
            {cardInfo.map((info, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="infoBox mb-6 flex w-full items-center" key={i}>
                  <div
                    className="svgBox relative size-8 bg-white shadow-sm"
                    dangerouslySetInnerHTML={{ __html: info.svg }}
                  ></div>
                  <div className="title mx-1 text-xl font-black text-dark-900">
                    {info.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </Background>
  </>
);
export { Benefit };
