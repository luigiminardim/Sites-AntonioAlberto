import { ContactSection } from "~/components/contact-section";
import { Footer } from "../../components/footer";
import { LandingPageHeader } from "./landing-page-header";
import { DescriptionSection } from "./criminal-landing-page/description-section";

export function CriminalLandingPage() {
  return (
    <>
      <main>
        <LandingPageHeader />;
        <DescriptionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
