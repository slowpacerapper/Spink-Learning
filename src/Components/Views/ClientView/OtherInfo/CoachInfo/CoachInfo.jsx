import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill, BsMailbox2 } from "react-icons/bs";
import CoachImg from "../../../../images/trustee6.jpeg";

const CoachInfo = () => {
  return (
    <CoachInfoContainer>
      <Course>Accounting</Course>
      <CoachImage src={CoachImg} alt="coach--image" />
      <CoachName>Dr. Ronald Jackson</CoachName>
      <CoachContactContainer>
        <CoachDetails>
          <BsFillTelephoneFill /> +234 8134117444
        </CoachDetails>
        <CoachDetails>
          <BsMailbox2 /> slowpacerapper@gmail.com
        </CoachDetails>
      </CoachContactContainer>
    </CoachInfoContainer>
  );
};

export default CoachInfo;

const CoachInfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  max-width: 100%;
  height: max-content;
`;

const Course = styled.h3`
  color: #187e5f;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`;

const CoachImage = styled.img`
  margin: 0 auto;
  width: 9rem;
  height: 9rem;
  object-fit: cover;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.6);
`;

const CoachName = styled.h3`
  color: #187e5f;
  font-size: 18px;
  text-transform: capitalize;
  text-align: center;
  font-weight: 500;
`;

const CoachContactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;
  background-color: #187e5f;
  padding: 2rem;
  border-radius: 5px;
`;

const CoachDetails = styled.button`
  display: flex;
  gap: 1rem;
  background-color: transparent;
  color: #f8ecd6;
  border: none;
  > * {
    fill: #f8ecd6;
  }
`;
