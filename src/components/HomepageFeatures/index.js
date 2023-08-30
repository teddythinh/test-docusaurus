import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Đặt vé tàu',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tìm vé tàu, đặt vé tàu trực tuyến, mua vé tàu trực tuyến, tra cứu thông tin hành trình về giờ tàu và giá vé, tra cứu lại thông tin vé đã đặt.
      </>
    ),
  },
  {
    title: 'Đặt khách sạn',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Đặt phòng khuyến mãi giá rẻ nhất ở Việt Nam và các nước khác chỉ trong 3 bước đơn giản.
      </>
    ),
  },
  {
    title: 'Đặt dịch vụ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Đặt các dịch vụ du lịch hoặc vé khu vui chơi giải trí với giá ưu đãi.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
