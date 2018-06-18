import React from 'react'
import { connect } from 'react-redux';

class Entry extends React.Component {
    render() {
        // console.log('Entry: props'); console.log(this.props);
        return (<EntryV id={this.props.id}
                        text={this.props.text}
                        isFlag={this.props.isFlag}
        />);
    }
}

class EntryV extends React.Component {
    render() {
        // console.log('EntryV props:'); console.log(this.props);
        let id = this.props.id;
        let text = this.props.text;
        let isFlag = this.props.isFlag;
        return (
            <div>
                entry id:{id}, text:{text}, flag:{isFlag}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        //
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entry);