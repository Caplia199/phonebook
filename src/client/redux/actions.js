const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

export function action_1(value) {
    return { 
        type: ADD_NUMBER,
        payload: value
    };
<<<<<<< HEAD
};

export function removeNumber(id) {
  return {
    type: REMOVE_NUMBER,
    payload: id,
  };
};
=======
}

export function removeNumberAction(id) {
    return {
      type: REMOVE_NUMBER,
      payload: id,
    };
  }

>>>>>>> 546173d (Fix redux)
