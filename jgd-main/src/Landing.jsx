import React from "react";
import ScrollToTopButton from "./components/ScrollTop";
import Blog from "./section/Blog/Blog";
import BeDealer from "./section/Dealer/BeDealer";
import PopularProducts from "./section/Popular/PopularProducts";
import RecommendeProducts from "./section/Popular/RecommendeProducts";
import Testimonials from "./section/Testimonials/Testimonials";
import Hero2 from "./section/hero/hero2";
import Category from "./section/landing-cards/Category";
import Story from "./section/our-story/Story";
import AgricultureIndustrySection from "./section/our-story/Story2";
import Category2 from "./section/landing-cards/Category2";

function Landing() {
  return (
    <div>
      <Hero2 />
      <Story />
      <Category2/>
      <Category />

      <PopularProducts />
      {/* <RecommendeProducts /> */}
      <AgricultureIndustrySection />
      <Blog />
      <Testimonials />
      <BeDealer />
      <ScrollToTopButton />
    </div>
  );
}

export default Landing;
