import React from 'react';
import { connect } from 'react-redux';

import { pg_OtherPage } from '../actions/A_Pg';

class HomePage extends React.Component {
    render() {
        // console.log('HomePage : props:'); console.log(this.props);
        return (<HomePageV
            tgl_OtherPage={this.props.tgl_OtherPage}
        />);
    }
}

class HomePageV extends React.Component {
    render() {
        // console.log('HomePageV : props:'); console.log(this.props);
        return (
            <div>
                Home
                <br/><br/>
                <button type="button" onClick={this.props.tgl_OtherPage}>go Other</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        tgl_OtherPage: () => {
            console.log('Homepage :: tgl_OtherPage()');
            dispatch(pg_OtherPage());
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
