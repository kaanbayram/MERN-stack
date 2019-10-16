import axios from 'axios';
import { GET_CATEGORI,ADD_ADVERT,DELETE_ADVERT, GET_ADVERT } from './types';


export const getCategori = () => dispatch =>{
    axios
        .get('/api/categories')
        .then( res => 
            dispatch({
                type:GET_CATEGORI,
                payload: res.data
            })
        ) 
};

export const addAdverts = advert => dispatch => {
    axios
        .post('/api/items', advert)
        .then(res => 
            dispatch({
                type: ADD_ADVERT,
                payload: res.data
            })
            )    
};

export const getAdvert = () => dispatch => {
    axios
        .get('/api/items')
        .then( res => 
            dispatch({
                type: GET_ADVERT,
                payload: res.data
            })
        )
};

