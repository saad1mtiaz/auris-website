import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Problem from '../components/sections/Problem';
import HowItWorks from '../components/sections/HowItWorks';
import Privacy from '../components/sections/Privacy';
import SDK from '../components/sections/SDK';
import CTA from '../components/sections/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Problem />
      <HowItWorks />
      <Privacy />
      <SDK />
      <CTA />
    </main>
  );
}
