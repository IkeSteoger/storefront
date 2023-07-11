import { createReducer, createAction } from '@reduxjs/toolkit';
import { CHANGE_CATEGORY, RESET } from './constants';
import axios from 'axios';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const setCategories = createAction(GET_CATEGORIES);

let initialState = {
        categories: [],
        activeCategory: '',
    };

const categoriesReducer = createReducer(
    initialState,
    {
        [GET_CATEGORIES]: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        },
        [CHANGE_CATEGORY]: (state, action) => {
            return {
                ...state,
                activeCategory: action.payload
            }
        },
        [RESET]: (state, action) => {
            return state;
        }
    }
)

export const getCategories = () => async(dispatch, getState) => {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    console.log('getCategories data: ', response.data.results)
    dispatch(setCategories(response.data.results));
}


// const initialState = {
//     categories: [
//         { name: 'electronics', displayName: 'Electronics' },
//         { name: 'food', displayName: 'Food' },
//         { name: 'clothing', displayName: 'Clothing' },
//     ],
//     activeCategory: '',
// };

// function categoriesReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'CHANGE_CATEGORY':
//             return {
//                 ...state,
//                 activeCategory: action.payload,
//             };
//         case 'RESET':
//             return initialState;
//         default:
//             return state;
//     }
// }

export default categoriesReducer;