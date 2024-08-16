import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes.js";

const initialState = {
    numOfItems: 0,
};
// function anything(params) { }
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        default:
            return state;
    }
};
export default cartReducer;