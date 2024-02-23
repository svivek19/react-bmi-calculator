import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const FormContainer = styled.div`
  background-color: transparent;
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  font-weight: 600;
`;

const FormItem = styled.div`
  margin-bottom: 16px;
  display:flex;
  justify-content:space-between;
  gap:5px
`;

const TextBMI = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: blue;
`;

const TextStatus = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: linear-gradient(135deg, #ffdd95, #822e3d, #f5812c);
`;

const Heading = styled.h1`
  color: linear-gradient(135deg, #ffdd95, #822e3d, #f5812c);
  margin-bottom: 30px;
`;

const Result = styled.div`
  border: 2px solid #852e3e;
  border-radius: 10px;
`;

const Error = styled.p`
  color:darkred;
  font-size:16px;
`;

export default { MainContainer, FormContainer, FormItem, TextBMI, TextStatus, Heading, Result, Error };

