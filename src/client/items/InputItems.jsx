import { useState, useEffect } from 'react';

export const useInputLogic = () => {
  const [input, setInput] = useState('');
  const [value, setValue] = useState(7);
  const [items, setItems] = useState([]);
  const [idCounter, setIdCounter] = useState(1);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:3002'); 
    setWs(newWs);

    newWs.onopen = () => {
      console.log('WebSocket connected');
    };

    return () => {
      newWs.close();
    };
  }, []);

  async function getMaxId() {
    const response = await fetch('http://localhost:3002/api/get');
  
    const data = await response.json();
    let maxID = data[data.length - 1].id;
    return maxID;
  }

  useEffect(() => {
    getMaxId().then((maxId) => {
      setIdCounter(maxId + 1);
    });
  }, []);

  const handleChangeCode = (event) => {
    setValue(event.target.value);
  };

  const handleChangeNumber = (event) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 10) {
      inputValue = inputValue.slice(0, 10);
    }

    setInput(inputValue);
  };

  const handleSubmit = () => {
    const newId = idCounter;

    try {
      if (ws && ws.readyState === WebSocket.OPEN) {
        const message = JSON.stringify({
          type: 'newNumber',
          data: {
            id: newId,
            code: `${value}`,
            number: `${input}`,
          },
        });
        ws.send(message);
      } else {
        console.error('WebSocket connection not open');
      }

      setInput('');
      setIdCounter((prevId) => prevId + 1);
    } catch (error) {
      console.error('Error sending data: ' + error.message);
    }
  };

  const isInputValid = input.length >= 3;

  return {
    input,
    setInput,
    items,
    setItems,
    value,
    setValue,
    handleChangeCode,
    handleChangeNumber,
    handleSubmit,
    isInputValid,
    idCounter,
  };
};
