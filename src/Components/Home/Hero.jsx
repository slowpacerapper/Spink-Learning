import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Hero1 from "../images/about3.jpeg";

const Hero = () => {
  return (
    <HeroDiv>
      <LeftHero>
        <ParaOne>Welcome to SPINK</ParaOne>
        <ParaTwo>
          Learning is one <br />
          of the ways we <br /> engage self development.
        </ParaTwo>
        <ParaThree>
          We are a Consultant company <br />
          that trains both individuals and organizations (small, medium or{" "}
          <br /> large), on technologies that enhances their productivity
        </ParaThree>
        <LearnMore href="#about">Learn More</LearnMore>
      </LeftHero>
      <RightHero>
        <HeroImage src={Hero1} />
      </RightHero>
    </HeroDiv>
  );
};

const HeroDiv = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: max-content;
  }
`;
const LeftHero = styled.div`
  position: relative;
  height: 100%;
  background: #f8ecd6;
  padding: 5rem 5.3rem;
  box-sizing: border-box;
  gap: 2rem;
  display: flex;
  flex-flow: column;
  flex: 1;
  max-width: 50%;
  min-width: 350px;
  @media (max-width: 800px) {
    min-width: 100%;
    padding: 3rem;
    padding-top: 5rem;
    justify-content: center;
  }
`;
const RightHero = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-end;
  /* transform: translateY(187%); */
  min-width: 350px;
  @media (max-width: 800px) {
    min-width: 100%;
    margin: 0 auto;
  }
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 8px solid #f8ecd6;
  border-left: none;
  border-bottom: none;
  border-bottom: none;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ParaOne = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: -1.5px;
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
const ParaTwo = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: -1.5px;
  /* text-transform: capitalize; */
  @media (max-width: 575px) {
    font-size: 1.3rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
    letter-spacing: -0.5px;
  }
`;
const ParaThree = styled.p`
  font-weight: 400;
  line-height: 1.6rem;
  font-size: 0.9rem;
`;

const LearnMore = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: #f8ecd6;
  background: #187e5f;
  padding: 1rem 1.2rem;
  width: max-content;
  font-weight: 500;
  font-size: 0.8rem;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background: transparent;
    border: 2px solid #187e5f;
    color: #187e5f;
  }
  @media (max-width: 575px) {
    padding: 0.6rem 0.9rem;
  }
`;
export default Hero;
