const initialState = {
    "a": 1
};

const workListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NUM':
            return {
                ...state,
                "a": action.num
            }
        default:
            return state;
    }
}

export default workListReducer;