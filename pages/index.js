import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import Highlights from "../components/Highlights";
import UseCases from "../components/UseCases";
import CTA from "../components/CTA";
import Head from "next/head";
import MediaGallery from "../components/MediaGallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Highway-Connected Commercial Space</title>
        <meta name="description" content="Strategic property with unmatched connectivity and logistics advantages." />
      </Head>
           
      <Hero />
      <MediaGallery />
      <MapSection />
      <Highlights />
      <UseCases />
      <CTA />
      <Footer />
    </>
  );
}


