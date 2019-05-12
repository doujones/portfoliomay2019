import React from "react";
import Hero from "../globals/Hero";
import Img1 from "../../images/Img1.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <Hero img={Img1}>
      <Banner
        greeting="welcome"
        title="William Boswell"
        text="Web Developer * Software Engineer * UX Designer"
      >
        <PrimaryBtn t="1rem" as="a" href="https://frosty-heisenberg-fd591d.netlify.com/">Projects</PrimaryBtn>
        
      </Banner>
    </Hero>
  );
};

export default Header;
