import { Nav } from '@/components/dryrun/Nav';
import { Hero } from '@/components/dryrun/Hero';
import { ProblemSection } from '@/components/dryrun/ProblemSection';
import { StepsSection } from '@/components/dryrun/StepsSection';
import { ModesSection } from '@/components/dryrun/ModesSection';
import { ConceptsSection } from '@/components/dryrun/ConceptsSection';
import { ComparisonSection } from '@/components/dryrun/ComparisonSection';
import { BridgeSection } from '@/components/dryrun/BridgeSection';
import { FinalCta } from '@/components/dryrun/FinalCta';
import { SiteFooter } from '@/components/dryrun/SiteFooter';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <StepsSection />
      <ModesSection />
      <ConceptsSection />
      <ComparisonSection />
      <BridgeSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
