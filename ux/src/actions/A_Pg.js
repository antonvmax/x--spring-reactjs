export const PG_HOMEPAGE = 'PG_HOMEPAGE';
export const PG_OTHERPAGE = 'PG_OTHERPAGE';
export const PG_PARAMETRIZEDPAGE = 'PG_PARAMETRIZEDPAGE';

export const pg_HomePage = () => ({
    type: PG_HOMEPAGE
});

export const pg_OtherPage = () => ({
    type: PG_OTHERPAGE
});

export const pg_ParametrizedPage = (paramId) => ({
    type: PG_PARAMETRIZEDPAGE,
    paramId: paramId,
});
