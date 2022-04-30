import React from "react";
import styled from "styled-components";
import Trustee5 from "../../images/trustee5.jpeg";

const ThreadComponent = () => {
  return (
    <ThreadComponentContainer>
      <ThreadTitle>Lecture Rescheduling</ThreadTitle>
      <ComposerInfoContainer>
        <ComposerInfo>
          <img src={Trustee5} alt="" />
          <ComposerDetails>
            <Paragraph>Bakare Ayodeji</Paragraph>
            <Paragraph style={{ marginTop: "-0.25rem" }}>6hrs ago</Paragraph>
          </ComposerDetails>
        </ComposerInfo>
        <DiscussionParams>Accounting</DiscussionParams>
      </ComposerInfoContainer>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at sint
        officia similique libero excepturi doloribus, earum, nam temporibus ex
        doloremque distinctio, quisquam natus accusantium in cumque. A, suscipit
        obcaecati?
      </Paragraph>
      <AddResponse>Add Response</AddResponse>
    </ThreadComponentContainer>
  );
};

export default ThreadComponent;
const ThreadComponentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #187e5f;
  display: flex;
  flex-flow: column;
  gap: 0.75rem;
  padding: 1rem;
`;

const ThreadTitle = styled.h3`
  font-size: 20px;
  color: #f8ecd6;
  font-weight: 600;
  text-transform: capitalize;
  line-height: 24px;
`;

const ComposerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

const DiscussionParams = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 10px;
  border: none;
  border-radius: 20px;
  width: max-content;
  height: max-content;
  background-color: #f8ecd6;
  cursor: pointer;
  color: #187e5f;
`;

const ComposerInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
`;

const ComposerDetails = styled.div`
  display: flex;
  flex-flow: column;
`;

const Paragraph = styled.p`
  line-height: 24px;
  font-size: 0.8rem;
  color: #f8ecd6;
`;

const AddResponse = styled.button`
  display: flex;
  width: max-content;
  cursor: pointer;
  gap: 0.5rem;
  color: #187e5f;
  border: none;
  border-radius: 20px;
  background-color: #f8ecd6;
  padding: 0.5rem 1.25rem;
`;
