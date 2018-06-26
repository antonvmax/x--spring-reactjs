import axios from 'axios';

export const OTHERPAGE_SOMELIST_DATA = 'OTHERPAGE_SOMELIST_DATA';
export const OTHERPAGE_SOMELIST_FAILED = 'OTHERPAGE_SOMELIST_FAILED';

// URL for that actions (server API)
const OTHERPAGE_LISTENTRIES_URL = './ux/otherpage_somelist/';

// url for debug mode (use ourself url to simulate successful query)
const OtherPage_SomeList_URL = () => {
    if (process.env.NODE_ENV === 'development') {
        return '/';
    }
    return OTHERPAGE_LISTENTRIES_URL;
};

///////////////////////////////////////////////////////////////////////////////////////////////////

export const otherPage_SomeList_Failed = (error) => ({
    type: OTHERPAGE_SOMELIST_FAILED,
    error: error
});

export const otherPage_SomeList_Data = (response) => ({
    type: OTHERPAGE_SOMELIST_DATA,
    data: response.data
});

///////////////////////////////////////////////////////////////////////////////////////////////////

export const query_OtherPage_SomeList = () => dispatch => {
    let url = OtherPage_SomeList_URL();                     // console.log('OtherPage_SomeList_URL() : request url [' + url + ']');
    return axios.get(url)
        .then(response => {
            // supply fictive data responce on successful query
            if (process.env.NODE_ENV === 'development') {
                let dH = [
                    { id: 11, text: "sometext11", isFlag: 1 },
                    { id: 12, text: "sometext12", isFlag: 0 },
                    { id: 13, text: "sometext13", isFlag: 1 },
                ];
                response = { data: dH };
            }                                               // console.log('OtherPage_SomeList_URL() : response data:'); console.log(response.data);
            dispatch(otherPage_SomeList_Data(response));
        })
        .catch(function (error) {
            dispatch(otherPage_SomeList_Failed(error));
        });
};
