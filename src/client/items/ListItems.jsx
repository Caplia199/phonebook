import React, { useContext } from 'react';
import Context from './Context';
import '../styles/List.css';
import deleteNumber from '../api/deleteNumber';

function Items({ value, index }) {
  const { remove } = useContext(Context);

  const handleDelete = async (id) => {
    await deleteNumber(id);
    remove(id);
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
