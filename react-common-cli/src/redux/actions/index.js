const actions = {
    changeNum: num => dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'CHANGE_NUM',
                num
            });
        }, 2000);
    }
    
};

export default actions;