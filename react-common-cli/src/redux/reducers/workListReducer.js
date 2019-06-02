const initialState = {
    "a": 1,
    treeData: [
        {
            title: '0-0',
            key: '0-0',
            children: [
                {
                    title: '0-0-0',
                    key: '0-0-0',
                    children: [
                        { title: '0-0-0-0', key: '0-0-0-0' },
                        { title: '0-0-0-1', key: '0-0-0-1' },
                        { title: '0-0-0-2', key: '0-0-0-2' },
                    ]
                }, 
                {
                    title: '0-0-1',
                    key: '0-0-1',
                    children: [
                        { title: '0-0-1-0', key: '0-0-1-0' },
                        { title: '0-0-1-1', key: '0-0-1-1' },
                        { title: '0-0-1-2', key: '0-0-1-2' },
                    ]
                }, 
                {
                    title: '0-0-2',
                    key: '0-0-2',
                }
            ]
        }, 
        {
            title: '0-1',
            key: '0-1',
            children: [
                { title: '0-1-0-0', key: '0-1-0-0' },
                { title: '0-1-0-1', key: '0-1-0-1' },
                { title: '0-1-0-2', key: '0-1-0-2' },
            ]
        }, 
        {
            title: '0-2',
            key: '0-2',
        }
    ]
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