import { Background } from '@/background/Background';
import { Section } from '@/layout/Section';

import CardIntroRec from '../hero/CardIntroRec';
import { TitleTag } from '../layout/TitleTag';

const cardInfo = [
  {
    title: 'Title',
    description:
      'content content content content content content content content content content content content.',
    rightAnglesPosit: 5,
  },
  {
    title: 'Title',
    description:
      'content content content content content content content content content content content content.',
    rightAnglesPosit: 5,
  },
  {
    title: 'Title',
    description:
      'content content content content content content content content content content content content.',
    rightAnglesPosit: 5,
  },
  {
    title: 'Title',
    description:
      'content content content content content content content content content content content content.',
    rightAnglesPosit: 5,
  },
];

const AquaCultural = () => (
  <>
    <Background color="bg-primary-100">
      <Section>
        <TitleTag
          title="即時、快速 "
          subTitle="一站式養殖服務"
          decoration="AQUACULTURAL SOLUTION"
        ></TitleTag>
        <div className="content py-8">
          <span>
            搭配自動化設備，更快速即時管理養殖，提升養殖效率，確保最佳養殖環境。依照個人需求彈性設定調整，滿足不同的養殖需求與目標。
          </span>
        </div>
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
