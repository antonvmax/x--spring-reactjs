﻿import React from 'react';
import { connect } from 'react-redux';

import { pg_HomePage } from '../actions/A_Pg';
import {
    query_OtherPage_SomeList,
    query_OtherPage_SomeList_Filtered,
} from '../actions/A_Pg_OtherPage';

import Entry from '../components/OtherPage/Entry';

class OtherPage extends React.Component {
    componentDidMount() {
        console.log('OtherPage :: componentDidMount');
        this.timerID = setTimeout(() => this.tick(), 2000);
    }

    componentWillUnmount() {
        if (this.timerID) {
            clearTimeout(this.timerID);
            this.timerID = null;
        }
    }

    tick() {
        console.log('OtherPage :: tick');
        clearTimeout(this.timerID);
        this.props.refreshSomeList();
    }

    render() {
        // console.log('OtherPage: props'); console.log(this.props);
        return (<OtherPageV otherPageSomeList={this.props.otherPageSomeList.otherPageSomeList}
                            tgl_HomePage={this.props.tgl_HomePage}
                            qry_SomeList_Filtered={this.props.qry_SomeList_Filtered}
        />);
    }
}

class OtherPageV extends React.Component {
    render() {
        // console.log('OtherPageV: props'); console.log(this.props);
        return (
            <div>
                Other
                <br/><br/>
                <button type="button" onClick={this.props.tgl_HomePage}>go Home</button>
                <br/><br/>
                <button type="button" onClick={() => this.props.qry_SomeList_Filtered('other')}>get list filtered by 'other'</button>
                <br/><br/>
                {this.props.otherPageSomeList.map((entry, index) => (
                    <Entry key={index} {...entry} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pg: state.pg,
        otherPageSomeList: state.otherPageSomeList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        refreshSomeList: () => {
            console.log('OtherPage :: refreshSomeList()');
            dispatch(query_OtherPage_SomeList());
        },
        qry_SomeList_Filtered: (filter) => {
            console.log('OtherPage :: qry_SomeList_Filtered(' + filter + ')');
            dispatch(query_OtherPage_SomeList_Filtered(filter));
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
)(OtherPage);