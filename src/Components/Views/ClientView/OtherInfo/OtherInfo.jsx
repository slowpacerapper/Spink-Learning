import React from "react";
import styled from "styled-components";
import Attendees from "./Attendees/Attendees";
import CoachInfo from "./CoachInfo/CoachInfo";

const OtherInfo = () => {
  return (
    <OtherInfoContainer>
      <CoachInfo />
      <Attendees />
    </OtherInfoContainer>
  );
};

export default OtherInfo;

const OtherInfoContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  padding: 0 1rem;
  gap: 0.5rem;
`;
