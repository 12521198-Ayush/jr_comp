import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import AsSeenOn from '@/components/AsSeenOn';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <WhyChooseUs />
      <AsSeenOn />
      <Testimonials />
      <CTA />
    </>
  );
}
