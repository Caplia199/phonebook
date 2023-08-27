import React, { useEffect, useState } from 'react';
import List from './client/List';
import Input from './client/InputNumber';
import deleteNumber from './client/api/deleteNumber';
import { removeNumber } from './client/redux/actions';

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const newWs = new WebSocket('ws://localhost:3002'); 

    newWs.onopen = () => {
      console.log('WebSocket connected');
    };

    newWs.onmessage = (event) => {
      const message = event.data;

      try {
        const data = JSON.parse(message);
        if (data.type === 'newNumber') {
          console.log(data.data);
        } else if (data.type === 'numbers') {
          setValue(data.data);
        }
      } catch (error) {
        console.error('Error parsing server message as JSON:', error);
      }
    };

    return () => {
      newWs.close();
    };
  }, []);

  useEffect(() => {
    fetch('http://localhost:3002/api/get') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setValue(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ' + error.message);
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
      console.error('Ошибка при удалении элемента: ', error);
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
