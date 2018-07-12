import * as actions from './A_Pg'

describe('actions', () => {
    it('pg_HomePage should create PG_HOMEPAGE action', () => {
        expect(actions.pg_HomePage())
            .toEqual({
                type: actions.PG_HOMEPAGE
            })
    });

    it('pg_OtherPage should create PG_OTHERPAGE action', () => {
        expect(actions.pg_OtherPage())
            .toEqual({
                type: actions.PG_OTHERPAGE
            })
    });

    it('pg_ParametrizedPage *without* parameter should create PG_PARAMETRIZEDPAGE action with `undefined` parameter', () => {
        expect(actions.pg_ParametrizedPage())
            .toEqual({
                type: actions.PG_PARAMETRIZEDPAGE,
                paramId: undefined
            })
    });

    it('pg_ParametrizedPage *with* parameter should create PG_PARAMETRIZEDPAGE action with parameter', () => {
        const testParam = "testParam";
        expect(actions.pg_ParametrizedPage(testParam))
            .toEqual({
                type: actions.PG_PARAMETRIZEDPAGE,
                paramId: testParam
            })
    });

});
