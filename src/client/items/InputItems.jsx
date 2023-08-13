import { useState } from 'react';
import postNumber from '../api/addNumber';

export const useInputLogic = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(7);

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
    postNumber({
      code: `${value}`,
      number: `${input}`
    });
    setItems([...items, `+${value} ${input}`]);
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
  };
};
