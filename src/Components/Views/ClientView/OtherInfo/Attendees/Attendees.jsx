import React from "react";
import styled from "styled-components";
import Trusteen from "../../../../images/trustee6.jpeg";
import AttendeesInfo from "./AttendeesInfo";



const Attendees = () => {
  let idCount = 0;
  const attendeesDb = [
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
    {
      id: ++idCount,
      studentName: "Bakare Ayodeji",
      image: Trusteen,
    },
  ];
  const attendee = attendeesDb.map((attender) => {
    return (
      <AttendeesInfo
        key={attender.id}
        studentName={attender.studentName}
        image={attender.image}
      />
    );
  });
  return (
    <AttendeesContainer>
      <AttendeesHeader>
        <span>{attendee.length}</span> <span>attendees</span>
      </AttendeesHeader>
      {attendee}
    </AttendeesContainer>
  );
};

export default Attendees;

const AttendeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-height: 300px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AttendeesHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  span {
    color: #187e5f;
  }
`;
