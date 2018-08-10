
const initialState = {
    bannerText: "img_01"
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