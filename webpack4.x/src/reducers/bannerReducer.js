
const initialState = {
    bannerText: 1
};

const bannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                bannerText: action.newText
            }
        default:
            return state;
    }
}

export default bannerReducer;