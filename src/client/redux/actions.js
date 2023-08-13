const ADD_NUMBER = 'ADD_NUMBER';

export function action_1(value) {
    return { 
        type: ADD_NUMBER,
        payload: value
    };
}