import React from 'react'
import Items from './Items';

function List(props) {

    return (
        <ul>
            {props.value.map((value, index) => {
                let container = [];
                let newValue = container.push(value.code + value.number)
                return (<Items  
                    value={newValue} 
                    key={value.id} 
                    index={index} 
                    onChange={props.onToggle}/>)
            })}
        </ul>
        )
};

export default List;
  
