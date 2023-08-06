import React, {useEffect} from 'react'
import List from './client/List';
import Context from './client/Context';
import Input from './client/InputNumber';

function App() {

  const [value, setValue] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/get')
      .then(response => response.json() )
      .then(value => {
        setValue(value)
        // value[0].code   И   value[0].number
      })
  }, []);

  function toggleList(id) {
    setValue(
      value.map( val => {
        if (val.id === id) {
          val.comleted = !val.comleted
        };
        return val;
      })
    )
  };

  function remove(id) {
    setValue(value.filter(val => val.id !== id))
  }

  return (
    <Context.Provider value={{remove}}>
      <div className='wrapper'>
          <h1>Справочник</h1>
          <Input/>
          {value.length ? <List value={value} onToggle={toggleList}/>: <p>Номеров нет</p>}
      </div>
    </Context.Provider>
  )
};

export default App;