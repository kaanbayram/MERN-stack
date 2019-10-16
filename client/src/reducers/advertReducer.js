import { ADD_ADVERT,DELETE_ADVERT,GET_CATEGORI,GET_ADVERT } from '../actions/types';

const initialState = {
    categories: [],
    adverts: []
};

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CATEGORI:
            return{
                ...state,
                categories: action.payload
            };

        case DELETE_ADVERT:
            return{
                ...state
            };

        case ADD_ADVERT:
            return{
                ...state,
                adverts: [action.payload, ...state.adverts]
            };
        case GET_ADVERT:
            return{
                ...state,
                adverts: action.payload
            };
        default:
            return state;
    }

}