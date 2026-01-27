import React from "react";
import Banner from "./Banner";
import CustomerTrust from "./CustomerTrust";
import AutoPlay from "./AutoPlay";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import SocialMediaLinks from "../../SocialMediaLinks";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <CustomerTrust />
      <AutoPlay />
      <FAQ />
      <ContactUs />
      <SocialMediaLinks />
      <Footer />
    </>
  );
}
