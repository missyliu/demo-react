/**
 * @file   Reducer
 * @author MissyLiu
 */
const initialState = 0;

export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};
