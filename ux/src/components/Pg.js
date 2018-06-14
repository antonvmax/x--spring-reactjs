﻿import React from 'react';
import { connect } from 'react-redux';

import { pg_HomePage, pg_OtherPage } from '../actions/A_Pg'

// import { SomeFunction } from '../actions/A_Pg';

import {
    PG_HOMEPAGE,
    PG_OTHERPAGE,
} from '../actions/A_Pg'

// Container Component
class Pg extends React.Component {
    // componentDidMount() {
    //     console.log('Pg :: componentDidMount');
    //     this.timerID = setInterval(() => this.tick(), 500);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }
    //
    // tick() {
    //     // this.props.CallSomeFunction();
    //     console.log('Pg :: tick');
    // }
    render() {
        return (<PgV
            curPage={this.props.pg.curPage}
            tgl_HomePage={this.props.tgl_HomePage}
            tgl_OtherPage={this.props.tgl_OtherPage}
        />);
    }
}

// Presentational Component
class PgV extends React.Component {
    render() {
        // console.log('PgV : props:'); console.log(this.props);
        switch (this.props.curPage) {
            case PG_HOMEPAGE:
                return (
                    <div>
                        Home
                        <br/><br/>
                        <button type="button" onClick={this.props.tgl_OtherPage}>go Other</button>
                    </div>
                );
            case PG_OTHERPAGE:
                return (
                    <div>
                        Other
                        <br/><br/>
                        <button type="button" onClick={this.props.tgl_HomePage}>go Home</button>
                    </div>
                );
            default:
                return (<div>That should not be</div>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        pg: state.pg,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // CallSomeFunction: () => {
        //     console.log('Call SomeFunction');
        //     dispatch(SomeFunction());
        // },
        tgl_OtherPage: () => {
            console.log('Homepage :: tgl_OtherPage()');
            dispatch(pg_OtherPage());
        },
        tgl_HomePage: () => {
            console.log('OtherPage :: tgl_HomePage()');
            dispatch(pg_HomePage());
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pg);
