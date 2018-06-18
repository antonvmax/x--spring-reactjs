
const initialState = {
    otherPageSomeList: [
        {id: 1, text: "sometext1", isFlag: 0},
        {id: 2, text: "sometext2", isFlag: 1},
        {id: 3, text: "sometext3", isFlag: 0},
    ],
};

const R_Pg_OtherPage = (state = initialState, action) => {
    switch (action.type) {

        default:
            // console.log('R_Pg_OtherPage : default');
            return state;
    }
};

export default R_Pg_OtherPage
