const initialState = {
    "b": 2
};

const questionBankReducer = (state = initialState, action) => {
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

export default questionBankReducer;