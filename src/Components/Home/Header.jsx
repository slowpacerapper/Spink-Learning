import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

const Header = () => {
  return (
    <Head>
      <Hero />
    </Head>
  );
};

const Head = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  background: #f8bc4c;
`;

export default Header;
