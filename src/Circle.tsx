import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState<string | number>(0);
  setValue(2); //문자열로 타입 지정
  setValue("hello"); //string으로 타입지정
  setValue(true); //에러 뜸
  return (
    <>
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
      </Container>
    </>
  );
}

export default Circle;
