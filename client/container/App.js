import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Menu from './Menu.js'
import HttpList from '../component/HttpList'
import Statistics from '../component/Statistics'

class App extends Component {
    render() {
        return (<div>
                <Menu showStatistics={this.props.showStatistics}/>
                <Statistics showStatistics={this.props.showStatistics} statistics={this.props.statistics}
                            pages={this.props.pages}/>

                <div>
                    {this.props.isDataLoad || <div className="hero-body"><div className="title is-1 has-text-centered">LOAD YOUR HAR</div></div>}
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
        maxTimes: state.maxTimes,
        showStatistics: state.showStatistics
    }
}

export default connect(stateToComponent)(App)