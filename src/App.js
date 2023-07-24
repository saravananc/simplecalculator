import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, FormControl, Row } from 'react-bootstrap';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


const  App =() => {

  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue('Error');
      }
    } else if (value === 'C') {
      setInputValue('');
    } else if (value === '+-') {
      setInputValue((prevValue) => (parseFloat(prevValue) * -1).toString());
    } else if (value === '%') {
      setInputValue((prevValue) => (parseFloat(prevValue) / 100).toString());
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };
  return (
    <>
     <div className="calculator-container mt-5">
      <div className="calculator">
        <FormControl
          type="text"
          className="form-control"
          value={inputValue}
          readOnly
        />

        {btnValues.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((value, colIndex) => (
              <Col key={colIndex} >
                <Button
                  variant="outline-primary"
                  onClick={() => handleButtonClick(value)}
                  style={{ height: '100%' }}
                >
                  {value}
                </Button>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

