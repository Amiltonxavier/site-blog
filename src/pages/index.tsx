

import { CallToactionSection } from "@/components/call-to-action-section";
import { CustomerStoreSection } from "@/components/customer-store-section";
import { FeaturesSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";
export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
      <CustomerStoreSection />
      <CallToactionSection />
    </article>
  );
}
