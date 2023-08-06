import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
    <li className="item-li">
      <span>
        <strong>{index + 1}</strong>
        {'+' + value.code + ' ' + value.number}
      </span>
      <button onClick={() => handleDelete(value.id)}>&times;</button>
    </li>
  );
}

Items.propTypes = {
  value: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Items;
