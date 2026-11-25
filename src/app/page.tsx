import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
    </main>
  );
}
