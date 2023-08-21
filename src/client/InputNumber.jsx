import React from 'react';
import { Button, TextField, Select } from '@mui/material';
import { useInputLogic } from './items/InputItems';
import { MenuItem } from '@mui/material';
import store from './redux/store';
import { action_1 } from './redux/actions';

const Input = () => {
  const {
    input,
    value,
    handleChangeCode,
    handleChangeNumber,
    handleSubmit,
    isInputValid,
    validationError,
    idCounter,
  } = useInputLogic();

  const handleSaveClick = async () => {
    if (isInputValid) {
      await handleSubmit(); 
      const numberToAdd = {
        id: idCounter,
        code: value,
        number: input,
      };
      store.dispatch(action_1(numberToAdd)); 
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Select code="code" value={value} onChange={handleChangeCode}>
          <MenuItem value={7}>+7</MenuItem>
          <MenuItem value={90}>+90</MenuItem>
          <MenuItem value={594}>+594</MenuItem>
        </Select>
        <TextField
          label="Введите номер телефона:"
          variant="filled"
          name="number"
          value={input}
          onChange={handleChangeNumber}
          error={!!validationError}
          helperText={validationError || ''}
        />
        <Button
          style={{ height: '56px' }}
          variant="contained"
          type="button"
          disabled={!isInputValid}
          onClick={handleSaveClick}
        >
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default Input;
