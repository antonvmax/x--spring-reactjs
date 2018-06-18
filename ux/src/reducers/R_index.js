import R_Pg from './R_Pg.js';
import R_Pg_OtherPage from './R_Pg_OtherPage.js';

/*
 const initialState = {
 somenode: "" [] {} ...
 }
 */

export default function rootReducer(state = {}, action) {
    return {
        pg: R_Pg(state.pg, action),
        otherPageSomeList: R_Pg_OtherPage(state.otherPageSomeList, action),
    }
}
