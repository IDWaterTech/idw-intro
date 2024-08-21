import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import CardIntroRec from '../hero/CardIntroRec';
import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  {
    title: '即時監控與反應',
    description:
      '24/7 實時監控水質、溫度、餌料消耗等關鍵指標。<br>緊急狀況自動通知，立即採取行動避免損失。',
    rightAnglesPosit: 5,
  },
  {
    title: '全方位服務',
    description:
      '提供從苗種選擇、餌料供應到成魚銷售的一站式服務。<br>專業技術團隊定期巡檢，提供諮詢和技術支持。',
    rightAnglesPosit: 5,
  },
  {
    title: '成本優化',
    description:
      '根據市場需求及時調整生產計劃，降低運營成本。<br>自動化設備和智能管理系統，減少人力和時間成本。',
    rightAnglesPosit: 5,
  },
  {
    title: '客製化解決方案',
    description:
      '根據客戶需求提供量身定制的養殖方案。<br>支援不同養殖模式，如陸地養殖、水上養殖等。',
    rightAnglesPosit: 5,
  },
];

const AquaCultural = () => (
  <>
    <Background color="bg-primary-100">
      <Section>
        <TitleTag
          title="一站式養殖服務"
          subTitle="即時、快速"
          decoration="AQUACULTURAL SOLUTION"
        ></TitleTag>
        <div className="content py-8 text-center">
          <span className="text-center text-dark-900">
            搭配自動化設備，更快速即時管理養殖，提升養殖效率，確保最佳養殖環境。依照個人需求彈性設定調整，滿足不同的養殖需求與目標。
          </span>
        </div>
        <div className="content flex py-8">
          {/* <div className="imgBox mx-2">
            <img src="/assets/images/menu.png" alt=""></img>
          </div> */}
          <div className="flex w-full flex-wrap">
            {cardInfo.map((info, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="infoBox mb-6 flex w-6/12 px-2" key={i}>
                  <CardIntroRec
                    title={info.title}
                    description={info.description}
                    rightAnglesPosit={info.rightAnglesPosit}
                  ></CardIntroRec>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </Background>
  </>
);
export { AquaCultural };
