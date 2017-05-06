import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Radium from 'radium'

import * as HarActions from '../actions/HarActions'
import Title from '../component/Title'
import Statistics from '../component/Statistics'
import HttpList from '../component/HttpList'

import {regularText} from '../style/components.js'

@Radium
class App extends Component {
    render() {
        return (<div style={regularText}>
                <Title loadHarContent={this.props.getHarActions.loadHarContent}/>
                <Statistics statistics={this.props.statistics}/>

                {this.props.pages.map((page, number) =>
                    <div>
                        <div>Page {number}</div>
                        <HttpList
                            entries={this.props.entries[number]}
                            page={page}
                            maxTime={this.props.maxTimes[number]}
                            dataLoad={this.props.isDataLoad}
                        />
                    </div>
                )}
            </div>
        )
    }
}

function stateToComponent(state) {
    return {
        entries: state.entries,
        pages: state.pages,
        isDataLoad: state.isDataLoad,
        statistics: state.statistics,
        maxTimes: state.maxTimes
    }
}

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App)