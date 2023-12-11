import React from "react";
import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import HomeAbout from "../Components/HomeAbout";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <HomeAbout />
    </>
  );
}
