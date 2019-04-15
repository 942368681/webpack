const initialState = {
    "a": 1
};

const workListReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                ...action.obj
            }
        default:
            return state;
    }
}

export default workListReducer;