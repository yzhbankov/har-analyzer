import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as HarActions from '../actions/HarActions'
import Title from '../component/Title'
import Statistics from '../component/Statistics'
import HttpList from '../component/HttpList'

class App extends Component {
    render() {
        return (<div>
                <Title getHarContent={this.props.getHarActions.getHarContent}/>
                <Statistics />
                <HttpList entries={this.props.entries}/>
            </div>
        )
    }
}

function stateToComponent(state) {
    return {
        entries: state.entries,
        page: state.page,
        isDataLoad: state.isDataLoad
    }
}

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App)