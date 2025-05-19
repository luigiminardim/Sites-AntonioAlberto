import { Header } from "../components/header";
import { BannerSection } from "./home-page/banner-section";
import { WhoWeAreSection } from "./home-page/who-we-are-section";
import { SpecialitiesSection } from "./home-page/specialities-section";
import { TeamSection } from "./home-page/team-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <>
      <Header />
      <main class={styles["home-page"]}>
        <BannerSection />
        <WhoWeAreSection />
        <SpecialitiesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
