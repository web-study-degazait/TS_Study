import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  //theme에서 bgColor을 가져옴
`;
const H1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>Air Pod 2</H1>
    </Container>
  );
}
export default App;
