import React from "react";
import Banner from "../Components/Banner";
import CustomerTrust from "../Components/CustomerTrust";
import AutoPlay from "../Components/AutoPlay";
import FAQ from "../Components/FAQ";
import ContactUs from "../Components/ContactUs";
import SocialMediaLinks from "../../SocialMediaLinks";
import PolularDestination from "../Components/PolularDestination";
import Discound from "../Components/Discound";


export default function Home() {
  return (
    <>
      <Banner />
      <CustomerTrust />
      <ContactUs />
      {/* <SocialMediaLinks /> */}
      <Discound />
      <PolularDestination />
      <FAQ />
      <AutoPlay />
      
    </>
  );
}
