const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

const initialState = {
    numbers: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_NUMBER:
        return {
          ...state,
          numbers: [ ...state.numbers, action.payload ], 
        };
  
      case REMOVE_NUMBER:
        return {
          ...state,
        numbers: state.numbers.filter((number) => number.id !== action.payload),
        };
  
      default:
        return state;
    }
}

export default reducer;
