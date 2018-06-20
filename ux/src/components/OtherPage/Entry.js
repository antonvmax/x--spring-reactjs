import React from 'react'
import { connect } from 'react-redux';
import { pg_ParametrizedPage } from "../../actions/A_Pg";

class Entry extends React.Component {
    render() {
        // console.log('Entry: props'); console.log(this.props);
        return (<EntryV id={this.props.id}
                        text={this.props.text}
                        isFlag={this.props.isFlag}
                        tgl_ParametrizedPage={this.props.tgl_ParametrizedPage}
        />);
    }
}

class EntryV extends React.Component {
    render() {
        // console.log('EntryV props:'); console.log(this.props);
        let id = this.props.id;
        let text = this.props.text;
        let isFlag = this.props.isFlag;
        let isDisabled = (this.props.isFlag !== 1) ? 'disabled' : '';
        return (
            <div>
                entry id:{id}, text:{text}, flag:{isFlag} &nbsp;
                <button type="button" onClick={() => this.props.tgl_ParametrizedPage(id)} disabled={isDisabled}>go Parametrized {id}</button>
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
        tgl_ParametrizedPage: (paramId) => {
            console.log('Entry :: tgl_ParametrizedPage(' + paramId + ')');
            dispatch(pg_ParametrizedPage(paramId));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Entry);