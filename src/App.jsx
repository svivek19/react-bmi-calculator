import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;
  text-align:center;
`;

const FormContainer = styled.div`
  background-color: transparent;
  backdrop-filter: blur(10px); 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  font-weight:600;
`;

const FormItem = styled.div`
  margin-bottom: 16px;
`;

const TextBMI = styled.p`
  font-weight:bold;
  font-size:20px;
  color:blue;
`;

const TextStatus = styled.p`
  font-weight:500;
  font-size:16px;
  color:linear-gradient(135deg, #FFDD95, #822E3D, #F5812C);
`;

const Heading = styled.h1`
  color:linear-gradient(135deg, #FFDD95, #822E3D, #F5812C);
  margin-bottom:30px;
`;

const Result = styled.div`
  border: 2px solid #852E3E;
  border-radius:10px;
`;

const App = () => {
  return (
    <MainContainer>
      <FormContainer>
        <Heading>BMI Calculator</Heading>
        <form>
          <FormItem>
            <TextField
              id="height"
              label="Height (cm)"
              type="text"
              variant="outlined"
              fullWidth
            />
          </FormItem>
          <FormItem>
            <TextField
              id="weight"
              label="Weight (kg)"
              type="text"
              variant="outlined"
              fullWidth
            />
          </FormItem>
          <FormItem>
            <Button variant="contained" color="primary" fullWidth>
              Calculate BMI
            </Button>
          </FormItem>
          <Result>
            <TextBMI>Your BMI is: 28.3</TextBMI>
            <TextStatus>Status: Overweight</TextStatus>
          </Result>
        </form>
      </FormContainer>
    </MainContainer>
  );
};


export default App;
