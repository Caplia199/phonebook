import React from 'react';
import Items from './items/ListItems';

function List(props) {
  const reversedValue = props.value.slice().reverse();

  return (
    <ul>
      {reversedValue.map((value, index) => {
        return <Items value={value} key={value.id} index={index} onChange={props.onToggle} />;
      })}
    </ul>
  );
}

export default List;
  
