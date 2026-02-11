import React from "react";
import Banner from "../Components/Banner";
import CustomerTrust from "../Components/CustomerTrust";
import AutoPlay from "../Components/AutoPlay";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";
import SocialMediaLinks from "../../SocialMediaLinks";


export default function Home() {
  return (
    <>
      <Banner />
      <CustomerTrust />
      <AutoPlay />
      <FAQ />
      <ContactUs />
      <SocialMediaLinks />
      
    </>
  );
}
