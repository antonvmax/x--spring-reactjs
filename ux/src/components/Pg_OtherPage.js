import React from 'react';
import { connect } from 'react-redux';

import { pg_HomePage } from '../actions/A_Pg';

class OtherPage extends React.Component {
    render() {
        // console.log('OtherPage: props'); console.log(this.props);
        return (<OtherPageV tgl_HomePage={this.props.tgl_HomePage}
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
            console.log('OtherPage :: tgl_HomePage()');
            dispatch(pg_HomePage());
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OtherPage);