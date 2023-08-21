const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

export function action_1(value) {
    return { 
        type: ADD_NUMBER,
        payload: value
    };
};

export function removeNumber(id) {
  return {
    type: REMOVE_NUMBER,
    payload: id,
  };
};