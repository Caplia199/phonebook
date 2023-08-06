import React from 'react';
import { Button, TextField, Select } from '@mui/material';
import { useInputLogic } from './items/InputItems';
import { MenuItem } from '@mui/material';

const Input = () => {
  const {
    input,
    value,
    handleChangeCode,
    handleChangeNumber,
    handleSubmit,
    isInputValid,
    validationError,
  } = useInputLogic();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Select code="code" value={value} onChange={handleChangeCode}>
          <MenuItem value={7}>+7</MenuItem>
          <MenuItem value={90}>+90</MenuItem>
          <MenuItem value={594}>+594</MenuItem>
        </Select>
        <TextField
          label="Введите номер телефона:"
          variant="filled"
          nimber="nimber"
          value={input}
          onChange={handleChangeNumber}
          error={!!validationError}
          helperText={validationError || ''}
        />
        <Button style={{ height: '56px' }} variant="contained" type="submit" disabled={!isInputValid}>
          Сохранить
        </Button>
      </form>
    </div>
  );
};

export default Input;



