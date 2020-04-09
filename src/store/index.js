import { createStore } from 'redux';

const INITIAL_STATE = {
    lang: 'english'
}

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_LANG':
            return {
                ...state,
                lang: action.language
            }
    
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
