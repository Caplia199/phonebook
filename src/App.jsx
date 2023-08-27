import React, { useEffect, useState } from 'react';
import List from './client/List';
import Input from './client/InputNumber';
import deleteNumber from './client/api/deleteNumber';
import getAllNumbers from './client/api/getAllNumbers';
import { removeNumber } from './client/redux/actions';

function App() {

  const [value, setValue] = useState([]);

  useEffect(() => {
    getAllNumbers()
      .then((data) => {
        setValue(data);
      });
  }, []);

  const toggleList = (id) => {
    setValue((prevValue) =>
      prevValue.map((val) => {
        if (val.id === id) {
          val.completed = !val.completed;
        }
        return val;
      })
    );
  };

  const remove = async (id, idCounter) => {
    try {
      await deleteNumber(id);
      removeNumber(id);
      setValue((prevValue) => prevValue.filter((val) => val.id !== id));
  
      console.log('idCounter:', idCounter);
    } catch (error) {
      console.error("Ошибка при удалении элемента: ", error);
    }
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="wrapper">
      <h1>Справочник</h1>
      <Input onValueChange={handleValueChange} />
      {value.length ? <List value={value} onToggle={toggleList} onRemove={remove} /> : <p>Номеров нет</p>}
    </div>
  );
}

export default App;
