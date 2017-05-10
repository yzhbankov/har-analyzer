import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Radium from 'radium'

import * as HarActions from '../actions/HarActions'
import Title from '../component/Title'
import HttpList from '../component/HttpList'
import Statistics from '../component/Statistics'

import {regularText, chapterTitle, center} from '../style/components.js'

@Radium class App extends Component {
    render() {
        return (<div style={regularText}>
                <Title loadHarContent={this.props.getHarActions.loadHarContent}/>
                <Statistics statistics={this.props.statistics} pages={this.props.pages}/>

                <div style={{overflow:'auto'}}>
                    {this.props.isDataLoad || <div style={[{fontSize:100, marginTop: '100px'}, center]}>LOAD YOUR HAR</div>}
                    {!this.props.isDataLoad || <div style={chapterTitle}>PAGES</div>}
                    {this.props.pages.map((page, number) =>
                            <HttpList
                                entries={this.props.entries[number]}
                                page={page}
                                maxTime={this.props.maxTimes[number]}
                                dataLoad={this.props.isDataLoad}
                                number={number}
                                />
                    )}</div>
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