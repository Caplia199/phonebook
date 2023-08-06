import React, { useEffect, useState } from 'react';
import List from './client/List';
import Context from './client/items/Context';
import Input from './client/InputNumber';

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/get')
      .then((response) => response.json())
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
    setValue((prevValue) => prevValue.filter((val) => val.id !== id));
  };

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Context.Provider value={{ remove }}>
      <div className="wrapper">
        <h1>Справочник</h1>
        <Input onValueChange={handleValueChange} />
        {value.length ? <List value={value} onToggle={toggleList} /> : <p>Номеров нет</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
