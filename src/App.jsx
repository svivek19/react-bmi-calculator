import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Style from './style/Style'

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [err, setErr] = useState('')

  const handleBmi = () => {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
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

      setErr("")

    } else {
      setBmi(null);
      setBmiStatus("");
      setErr("Please enter valid numeric values for height and weight.")
    }
  };

  const handleClear = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmiStatus('');
    setErr("");
  }

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <Style.MainContainer>
      <Style.FormContainer>
        <Style.Heading>BMI Calculator</Style.Heading>
        {err && <Style.Error>{err}</Style.Error>}
        <form>
          <Style.FormItem>
            <TextField
              id="height"
              label="Height (cm)"
              type="text"
              variant="outlined"
              fullWidth
              value={height}
              onChange={handleChangeHeight}
            />
          </Style.FormItem>
          <Style.FormItem>
            <TextField
              id="weight"
              label="Weight (kg)"
              type="text"
              variant="outlined"
              fullWidth
              value={weight}
              onChange={handleChangeWeight}
            />
          </Style.FormItem>
          <Style.FormItem>
            <Button variant="contained" color="primary" fullWidth onClick={handleBmi}>
              Calculate BMI
            </Button>
            <Button variant="contained" color="inherit" fullWidth onClick={handleClear}>
              Clear
            </Button>
          </Style.FormItem>
          {bmi !== null && (
            <Style.Result>
              <Style.TextBMI>Your BMI is: {bmi}</Style.TextBMI>
              <Style.TextStatus>Status: {bmiStatus}</Style.TextStatus>
            </Style.Result>
          )}
        </form>
      </Style.FormContainer>
    </Style.MainContainer>
  );
};

export default App;
