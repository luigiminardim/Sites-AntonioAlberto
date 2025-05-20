import { ContactSection } from "~/components/contact-section";
import { Footer } from "../../components/footer";
import { LandingPageHeader } from "~/components/landing-page-header";
import { DescriptionSection } from "./criminal-landing-page/description-section";
import { QuestionSection } from "~/components/questions-section";

export function CriminalLandingPage() {
  return (
    <>
      <main>
        <LandingPageHeader />;
        <DescriptionSection />
        <QuestionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
