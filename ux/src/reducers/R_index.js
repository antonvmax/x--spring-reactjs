import R_Pg from './R_Pg.js';

/*
 const initialState = {
 somenode: "" [] {} ...
 }
 */

export default function rootReducer(state = {}, action) {
    return {
        pg: R_Pg(state.pg, action),
    }
}
