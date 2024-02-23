import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

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
`;

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  const handleBmi = () => {
    if (height && weight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus('Overweight');
      } else {
        setBmiStatus('Obese');
      }

    } else {
      setBmi(null);
      setBmiStatus("");
    }
  };

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <MainContainer>
      <FormContainer>
        <Heading>BMI Calculator</Heading>
        <Error>Please enter valid numeric values for height and weight.</Error>
        <form>
          <FormItem>
            <TextField
              id="height"
              label="Height (cm)"
              type="text"
              variant="outlined"
              fullWidth
              value={height}
              onChange={handleChangeHeight}
            />
          </FormItem>
          <FormItem>
            <TextField
              id="weight"
              label="Weight (kg)"
              type="text"
              variant="outlined"
              fullWidth
              value={weight}
              onChange={handleChangeWeight}
            />
          </FormItem>
          <FormItem>
            <Button variant="contained" color="primary" fullWidth onClick={handleBmi}>
              Calculate BMI
            </Button>
          </FormItem>
          {bmi !== null && (
            <Result>
              <TextBMI>Your BMI is: {bmi}</TextBMI>
              <TextStatus>Status: {bmiStatus}</TextStatus>
            </Result>
          )}
        </form>
      </FormContainer>
    </MainContainer>
  );
};

export default App;
