import React, { useEffect, useState } from 'react';
import List from './client/List';
import Input from './client/InputNumber';
import deleteNumber from './client/api/deleteNumber';
import getAllNumbers from './client/api/getAllNumbers';

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

  const remove = (id) => {
    deleteNumber(id);
    setValue((prevValue) => prevValue.filter((val) => val.id !== id));
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
