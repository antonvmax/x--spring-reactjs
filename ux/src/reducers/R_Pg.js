import {
    PG_HOMEPAGE,
    PG_OTHERPAGE,
    PG_PARAMETRIZEDPAGE,
} from '../actions/A_Pg';

const initialState = {
    curPage: PG_HOMEPAGE,
    curParamId: null,
};

const R_Pg = (state = initialState, action) => {
    switch (action.type) {
        case PG_HOMEPAGE:
            console.log('R_Pg : PG_HOMEPAGE!');
            return { ...state, ...{ curPage: PG_HOMEPAGE } };

        case PG_OTHERPAGE:
            console.log('R_Pg : PG_OTHERPAGE!');
            return { ...state, ...{ curPage: PG_OTHERPAGE } };

        case PG_PARAMETRIZEDPAGE:
            console.log('R_Pg : PG_PARAMETRIZEDPAGE! paramId:' + action.paramId);
            return { ...state, ...{ curPage: PG_PARAMETRIZEDPAGE, curParamId: action.paramId } };

        default:
            // console.log('R_Pg : default : ' + action.type);
            return state;
    }
};

export default R_Pg
