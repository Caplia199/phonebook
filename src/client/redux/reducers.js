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
          numbers: [action.payload, ...state.numbers], 
        };
  
      case REMOVE_NUMBER:
        return {
          ...state,
          numbers: state.numbers.slice(0, state.numbers.length - 1),
        };
  
      default:
        return state;
    }
}

export default reducer;
