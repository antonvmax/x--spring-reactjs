import R_Pg from './R_Pg'

import {
    PG_HOMEPAGE,
    PG_OTHERPAGE,
    PG_PARAMETRIZEDPAGE,
} from '../actions/A_Pg'

describe('R_Pg reducer', () => {
    it('should handle initial state', () => {
        expect(
            R_Pg(undefined, {})
        ).toEqual({
            curPage: PG_HOMEPAGE,
            curParamId: null,
        });
    });

    it('should handle PG_HOMEPAGE', () => {
        expect(
            R_Pg(undefined, {
                type: PG_HOMEPAGE
            })
        ).toEqual({
            curPage: PG_HOMEPAGE,
            curParamId: null,
        });
    });

    it('should handle PG_OTHERPAGE', () => {
        expect(
            R_Pg(undefined, {
                type: PG_OTHERPAGE
            })
        ).toEqual({
            curPage: PG_OTHERPAGE,
            curParamId: null,
        });
    });

    it('should handle PG_PARAMETRIZEDPAGE *without* parameter (with parameter === undefined)', () => {
        expect(
            R_Pg(undefined, {
                type: PG_PARAMETRIZEDPAGE,
                // data: {}
            })
        ).toEqual({
            curPage: PG_PARAMETRIZEDPAGE,
            paramId: undefined,
        });
    });

    it('should handle PG_PARAMETRIZEDPAGE *with* parameter', () => {
        const testParam = "testParam";
        expect(
            R_Pg(undefined, {
                type: PG_PARAMETRIZEDPAGE,
                paramId: testParam,

            })
        ).toEqual({
            curPage: PG_PARAMETRIZEDPAGE,
            curParamId: testParam,
        });
    });

});
