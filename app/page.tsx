import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { SectionTitle } from '../components/SectionTitle';
import { Benefits } from '../components/Benefits';
import { Video } from '../components/Video';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { Cta } from '../components/Cta';

import { benefitOne, benefitTwo } from '../components/data';
import UsedBycComponent from '../components/UsedByComponent';
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Why Choose Us"
        title="Unparalleled Expertise in AG Grid"
      >
        We build high-performance, data-rich web applications that drive
        business success
      </SectionTitle>

      <Benefits data={benefitOne} />
      <UsedBycComponent />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>

      <Testimonials />

      <SectionTitle
        preTitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
