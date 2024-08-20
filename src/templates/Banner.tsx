import { Background } from '@/background/Background';

import CardIntro from '../hero/CardIntro';
import { Section } from '../layout/Section';
import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  {
    imageSrc: 'des_instant.png',
    title: '即時數據',
    description: `隨時檢視最新數據，即時掌握養殖池，降低池內死亡率<br>．檢視各池養殖資訊<br>．即時檢視各池水質狀態<br>．顏色區分緊急狀態`,
    rightAnglesPosit: 4,
  },
  {
    imageSrc: 'des_analysis.png',
    title: '數據分析',
    description: `掌握養殖池的數據變化與差異<br>．檢視時間範圍內場池的各數據圖表<br>．多樣數據精準掌握`,
    rightAnglesPosit: 3,
  },
  {
    imageSrc: 'des_kb.png',
    title: '知識庫',
    description: `立即掌握AI建議，大幅提升養殖池的存活率<br>．自動抓取各池數據<br>．快速掌握問題原因，及解決方法`,
    rightAnglesPosit: 2,
  },
  {
    imageSrc: 'des_daily.png',
    title: '每日任務紀錄',
    description: `打造新手也可以成功養殖的葵花寶典，掌握成功的秘訣<br>．詳列每日須做的事項<br>．自由彈性設定事項`,
    rightAnglesPosit: 1,
  },
];

const Banner = () => (
  <div id="des">
    <Background color="bg-primary-100">
      <img
        className="topDecoration absolute"
        src="./assets/images/decoration.png"
        alt="decoration"
      ></img>
      <img
        className="bottomDecoration absolute"
        src="./assets/images/decoration.png"
        alt="decoration"
      ></img>
      <Section>
        <TitleTag
          title="養殖專家系統"
          subTitle="精準掌握數據"
          decoration="Precision Analytics"
        ></TitleTag>
        <div className="my-8 flex w-full flex-wrap">
          {cardInfo.map((info, i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="infoBox mb-6 flex w-6/12" key={i}>
                <CardIntro
                  imageSrc={`./assets/images/${info.imageSrc}`}
                  title={info.title}
                  description={info.description}
                  rightAnglesPosit={info.rightAnglesPosit}
                ></CardIntro>
              </div>
            );
          })}
        </div>
      </Section>
    </Background>
  </div>
);

export { Banner };
