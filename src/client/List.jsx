import React from 'react';
import Items from './items/ListItems';
import { useSelector } from 'react-redux'; 

function List(props) {
  const storeValue = useSelector(state => state.numbers); 
  const combinedValue = [...props.value, ...storeValue].reverse(); 

  return (
    <ul>
      {combinedValue.length > 0 ? (
        combinedValue.map((value, index) => (
          <Items value={value} key={value.id} index={index} onChange={props.onToggle} />
        ))
      ) : (
        <p>Номеров нет</p>
      )}
    </ul>
  );
}

export default List;