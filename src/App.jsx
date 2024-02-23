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


const App = () => {
  return (
    <MainContainer>
      <FormContainer>
        <h1>BMI Calculator</h1>
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
          <div>
            <p>Your BMI is: 28.3</p>
            <p>Status: Overweight</p>
          </div>
        </form>
      </FormContainer>
    </MainContainer>
  );
};


export default App;
