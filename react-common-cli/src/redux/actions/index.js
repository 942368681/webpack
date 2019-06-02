const actions = {
    changeNumAsync: num => dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'CHANGE_NUM',
                num
            });
        }, 2000);
    },
    changeNum: num => {
        return {
            type: 'CHANGE_NUM',
            num
        }
    }
};

export default actions;