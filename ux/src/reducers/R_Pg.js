import {
    PG_HOMEPAGE,
    PG_OTHERPAGE,
} from '../actions/A_Pg';

const initialState = {
    curPage: PG_HOMEPAGE,
};

const R_Pg = (state = initialState, action) => {
    switch (action.type) {
        case PG_HOMEPAGE:
            console.log('R_Pg : PG_HOMEPAGE!');
            return { ...state, ...{ curPage: PG_HOMEPAGE } };

        case PG_OTHERPAGE:
            console.log('R_Pg : PG_OTHERPAGE!');
            return { ...state, ...{ curPage: PG_OTHERPAGE } };

        default:
            // console.log('R_Pg : default : ' + action.type);
            return state;
    }
};

export default R_Pg
