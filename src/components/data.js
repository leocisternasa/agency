import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../../public/img/benefit-one.png';
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
    },
    {
      title: 'Seamless integration with popular frameworks.',
      desc: 'Cross-framework AG Grid solutions: seamless integration, consistent performance, future-proof applications. React, Angular, Vue or even plain JavaScript',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Customizable and Extensible Solutions',
      desc: "Expert AG Grid customization boosts your app's functionality and brand differentiation.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
