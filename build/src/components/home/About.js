import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import img0 from "../../images/Img0.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../styles";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="Img0">
          <img src={img0} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about will" />
          <p>
          WILLIAM BOSWELL is a developer with a passion for beautiful designs and UI’s. Born in Montgomery, AL, he later moved to Atlanta for new and exciting opportunities. He has a degree in Computer Information Systems and loves clean and well-tested code.
          </p>
          <PrimaryBtn t="1rem" as="a" href="https://www.dropbox.com/s/85rwqdodsm7z8gs/April2019resume2.0.docx?dl=0">Resume'</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .Img0,
  .about-info {
    padding: ${setRem(30)};
  }
  .Img0 {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width:100vw;
  max-width:1170px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  .about-img,.about-info{
   align-self:center;
  }
  .about-info{
   p{
    width:80%;
   }
  }
  `}
`;

export default About;
