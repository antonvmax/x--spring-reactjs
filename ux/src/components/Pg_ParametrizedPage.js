import React from 'react';
import { connect } from 'react-redux';

import { pg_HomePage, pg_OtherPage } from '../actions/A_Pg'

// Container Component
class ParametrizedPage extends React.Component {
    render() {
        return (<ParametrizedPageV
            curParamId={this.props.pg.curParamId}
            tgl_HomePage={this.props.tgl_HomePage}
            tgl_OtherPage={this.props.tgl_OtherPage}
        />);
    }
}

// Presentational Component
class ParametrizedPageV extends React.Component {
    render() {
        // console.log('ParametrizedPageV: props'); console.log(this.props);
        return (
            <div>
                Parametrized {this.props.curParamId}
                <br/><br/>
                <button type="button" onClick={this.props.tgl_HomePage}>go Home</button>
                <button type="button" onClick={this.props.tgl_OtherPage}>go Other</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pg: state.pg,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tgl_HomePage: () => {
            console.log('ParametrizedPage :: tgl_HomePage()');
            dispatch(pg_HomePage());
        },
        tgl_OtherPage: () => {
            console.log('ParametrizedPage :: tgl_OtherPage()');
            dispatch(pg_OtherPage());
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParametrizedPage);
