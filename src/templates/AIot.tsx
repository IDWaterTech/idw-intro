import { Background } from '@/background/Background';
import CardAIot from '@/hero/CardAIot';
import { Section } from '@/layout/Section';

import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  // {
  //   title: '專家系統',
  //   imageSrc: './assets/images/aiot/aiot-expert.png',
  //   description: '快速掌握數據，搭配AI建議，即時處理異常，降低風險。',
  //   rightAnglesPosit: 5,
  // },
  {
    title: '觀察網',
    imageSrc: './assets/images/aiot/aiot-observation.png',
    description:
      '透過設定好的排程定期拍攝水下養殖物，並結合影像辨識技術，提早發現異常。',
    infoSrc: './assets/images/aiot/observation.png',
    info: '尺寸(mm)：973(W) x 950(D) x 1290(H)<br>重量：68 Kg<br>電源：220 VAC<br>功率：100 W<br>投餌精度：±1g<br>適用粒徑：0.4~2.0 mm<br> 容量：10 Kg',
  },
  {
    title: '水質機',
    imageSrc: './assets/images/aiot/aiot-water.png',
    description: '採光電比色法技術，準確監控養殖關鍵物質濃度，操作簡便。',
    infoSrc: './assets/images/aiot/water.png',
    info: '尺寸(mm)：973(W) x 950(D) x 1290(H)<br>重量：6 Kg<br>電源：220 VAC<br>功率：20 W<br>氨氮：0ppm~4ppm / 0.1ppm<br>亞硝酸鹽：0ppm~10ppm / 0.1ppm<br>pH：0~14 / ±0.1pH(25℃)',
  },
  {
    title: '智慧電箱',
    imageSrc: './assets/images/aiot/aiot-electronic.png',
    description: '輕鬆遠端監控和控制各項設備，實現養殖過程的智能化管理。',
    infoSrc: './assets/images/aiot/electronic.png',
    info: '尺寸(mm)：600(W) x 600(D) x 180(H)<br>重量：9.6 Kg<br>電壓：220 VAC<br>迴路數量：4個<br>最大功率：2HP(單一迴路)',
  },
  {
    title: '投餌機',
    imageSrc: './assets/images/aiot/aiot-ingredient.png',
    description: '定量型自動投餌系統，配備重量感測器，可進行精準的投餌動作。',
    infoSrc: './assets/images/aiot/feeding.png',
    info: '尺寸(mm)：530(W) x 550(D) x 1160(H)<br>重量：26 Kg<br>電源：220 VAC<br>功率：0.8 KW<br>投餌精度：±0.05Kg<br>適用粒徑：0.4~2.0 mm<br> 容量：60 Kg',
  },
];
const AIot = () => (
  <div id="tech">
    <Background color="bg-primary-100">
      <Section>
        <TitleTag
          title="AIoT自動化設備"
          subTitle="智能輔助有效監測"
          decoration="AUTOMATION TECH"
        ></TitleTag>
        <div className="content flex py-8">
          {/* <div className="imgBox mx-2">
            <img src="/assets/images/menu.png" alt=""></img>
          </div> */}
          <div className="flex w-full flex-wrap">
            {cardInfo.map((info, i) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="infoBox mb-6 flex w-6/12" key={i}>
                  {/* <CardIntroRec
                    title={info.title}
                    description={info.description}
                    rightAnglesPosit={info.rightAnglesPosit}
                    imageSrc={info.imageSrc}
                    isAIot="true"
                  ></CardIntroRec> */}
                  <CardAIot
                    title={info.title}
                    description={info.description}
                    imageSrc={info.imageSrc}
                    infoSrc={info.infoSrc}
                    info={info.info}
                  ></CardAIot>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </Background>
  </div>
);
export { AIot };
