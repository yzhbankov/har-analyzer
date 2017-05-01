import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Radium from 'radium'

import * as HarActions from '../actions/HarActions'
import Title from '../component/Title'
import Statistics from '../component/Statistics'
import HttpList from '../component/HttpList'

import {text} from '../style/component/app'

@Radium
class App extends Component {
    render() {
        return (<div style={text}>
                <Title loadHarContent={this.props.getHarActions.loadHarContent}/>
                <Statistics statistics={this.props.statistics}/>
                <HttpList entries={this.props.entries} pages={this.props.pages}/>
            </div>
        )
    }
}

function stateToComponent(state) {
    return {
        entries: state.entries,
        pages: state.pages,
        isDataLoad: state.isDataLoad,
        statistics: state.statistics
    }
}

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App)