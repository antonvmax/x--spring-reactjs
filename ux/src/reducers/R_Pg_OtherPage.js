import {
    OTHERPAGE_SOMELIST_DATA,
    OTHERPAGE_SOMELIST_FAILED,
} from '../actions/A_Pg_OtherPage'

const initialState = {
    otherPageSomeList: [
        { id: 1, text: "sometext1", isFlag: 0 },
        { id: 2, text: "sometext2", isFlag: 1 },
        { id: 3, text: "sometext3", isFlag: 0 },
    ],
};

const R_Pg_OtherPage = (state = initialState, action) => {
    switch (action.type) {

        case OTHERPAGE_SOMELIST_FAILED:
            console.log('R_Pg_OtherPage : OTHERPAGE_SOMELIST_FAILED!');
            return state;

        case OTHERPAGE_SOMELIST_DATA:
            console.log('R_Pg_OtherPage : OTHERPAGE_SOMELIST_DATA!');
            if (action.data instanceof Array) {
                return { ...state, ...{ otherPageSomeList: action.data } };
            }
            return { ...state, ...{ otherPageSomeList: [] } };

        default:
            // console.log('R_Pg_OtherPage : default');
            return state;
    }
};

export default R_Pg_OtherPage
