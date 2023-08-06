import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import Context from './Context';

const style = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginButtom: '.5rem',
    }
}

function Items({ value, index }) {

    const { remove } = useContext(Context)

    return (
        <li style={style.li}>
            <span>
                <strong>{index + 1}</strong>
                {value.number}
            </span>
            <button onClick={() => remove(value.id)}>
                &times;
            </button>
        </li>
    )
};

Items.propTypes = {
    value: PropTypes.object.isRequired,
    index: PropTypes.number,
    };

export default Items;