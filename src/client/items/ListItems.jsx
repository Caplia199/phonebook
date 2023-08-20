import React from 'react';
import '../styles/List.css';

function Items({ value, index, onChange, onRemove }) {
  const handleDelete = async (id) => {
    await onRemove(id);
  };

  return (
    <li className="item-li" key={value.id}>
      <span>
        <strong>{index + 1}</strong>
        {'+' + value.code + ' ' + value.number}
      </span>
      <button onClick={() => handleDelete(value.id)}>&times;</button>
    </li>
  );
}

export default Items;
