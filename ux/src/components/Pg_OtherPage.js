import React from 'react';
import { connect } from 'react-redux';

import { pg_HomePage } from '../actions/A_Pg';

class OtherPage extends React.Component {
    render() {
        // console.log('OtherPage: props'); console.log(this.props);
        return (<OtherPageV
            otherPageSomeList={this.props.otherPageSomeList.otherPageSomeList}
            tgl_HomePage={this.props.tgl_HomePage}
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
                {this.props.otherPageSomeList.map((entry, index) => (
                    <div key={index}>list element idx:{index} id:{entry.id} text:{entry.text}</div>
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