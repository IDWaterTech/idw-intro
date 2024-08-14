import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import CardIntroRec from '../hero/CardIntroRec';
import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  {
    title: '專家系統',
    imageSrc: '/assets/images/aiot-expert.png',
    description: '快速掌握數據，搭配AI建議，即時處理異常，降低風險。',
    rightAnglesPosit: 5,
  },
  {
    title: '觀察網',
    imageSrc: '/assets/images/aiot-observation.png',
    description:
      '透過設定好的排程定期拍攝水下養殖物，並結合影像辨識技術，提早發現異常。',
    rightAnglesPosit: 5,
  },
  {
    title: '水質機',
    imageSrc: '/assets/images/aiot-water.png',
    description: '採光電比色法技術，準確監控養殖關鍵物質濃度，操作簡便。',
    rightAnglesPosit: 5,
  },
  {
    title: '投餌機',
    imageSrc: '/assets/images/aiot-ingredient.png',
    description: '定量型自動投餌系統，配備重量感測器，可進行精準的投餌動作。',
    rightAnglesPosit: 5,
  },
];
const AIot = () => (
  <>
    <Background color="bg-gray-50">
      <Section>
        <TitleTag
          title="AIoT"
          subTitle="AI輔助有效監測"
          decoration="AUTOMATION TECH"
        ></TitleTag>
        <div className="content flex py-8">
          {/* <div className="imgBox mx-2">
            <img src="/assets/images/menu.png" alt=""></img>
          </div> */}
          <div className="infoGroup">
            {cardInfo.map((info, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="infoBox" key={i}>
                  <CardIntroRec
                    title={info.title}
                    description={info.description}
                    rightAnglesPosit={info.rightAnglesPosit}
                    imageSrc={info.imageSrc}
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
export { AIot };
