import React from "react";
import styled from "styled-components";

const AttendeesInfo = ({ id, image, studentName }) => {
  return (
    <AttendeesInfoContainer id={id}>
      <AttendeesInfoImage src={image} alt="attendees--image" />
      <AttendeesName>{studentName}</AttendeesName>
    </AttendeesInfoContainer>
  );
};

export default AttendeesInfo;

const AttendeesInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
`;

const AttendeesInfoImage = styled.img`
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  border-radius: 50%;
`;

const AttendeesName = styled.h4`
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  color: #187e5f;
  font-weight: 500;
`;
