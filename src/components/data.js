import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitListOneImg from '../../public/img/benefit-list-one.png';
import benefitListTwoImg from '../../public/img/benefit-list-two.png';
import benefitListThreeImg from '../../public/img/benefit-list-three.png';
import benefitTwoListOneImg from '../../public/img/benefit-two-list-one.png';
import benefitTwoListTwoImg from '../../public/img/benefit-two-list-two.png';
import benefitTwoListThreeImg from '../../public/img/benefit-two-list-three.png';

import benefitOneImg from '../../public/js.png';
import benefitTwoImg from '../../public/img/benefit-two.png';

const benefitOne = {
  title: 'Expertise in AG Grid, the gold standard for JavaScript grids',
  desc: "Our AG Grid experts bring years of experience in implementing complex data solutions. We leverage AG Grid's full potential, from basic setups to advanced customizations, ensuring optimal performance and user experience for your data-intensive projects.",
  image: benefitOneImg,
  bullets: [
    {
      title: 'Superior Performance for Large Datasets',
      desc: 'AG Grid: Lightning-fast data management for millions of real-time records.',
      icon: <FaceSmileIcon />,
      img: benefitListOneImg,
    },
    {
      title: 'Seamless integration with popular frameworks.',
      desc: 'Cross-framework AG Grid solutions: seamless integration, consistent performance, future-proof applications. React, Angular, Vue or even plain JavaScript',
      icon: <ChartBarSquareIcon />,
      img: benefitListTwoImg,
    },
    {
      title: 'Customizable and Extensible Solutions',
      desc: "Expert AG Grid customization boosts your app's functionality and brand differentiation.",
      icon: <CursorArrowRaysIcon />,
      img: benefitListThreeImg,
    },
  ],
};

const benefitTwo = {
  title: 'Unmatched Power, Blazing Speed',
  desc: 'Handle massive datasets with ease. Our solution effortlessly processes millions of records and thousands of real-time updates every second. Experience robust performance that rises to any data challenge you present.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Gold Standard for Enterprise Applications',
      desc: 'Unrivaled component-based solution, perfect for building robust business software.',
      icon: <DevicePhoneMobileIcon />,
      img: benefitTwoListOneImg,
    },
    {
      title: 'Seamless Integration, Ultimate Extensibility',
      desc: 'Leverages your preferred framework, offering unparalleled customization and performance advantages.',
      icon: <AdjustmentsHorizontalIcon />,
      img: benefitTwoListTwoImg,
    },
    {
      title: 'Blazing-Fast Data Display Powerhouse',
      desc: 'Highly customizable grid solution, optimized for handling and presenting large datasets efficiently. ',
      icon: <SunIcon />,
      img: benefitTwoListThreeImg,
    },
  ],
};

export { benefitOne, benefitTwo };
