import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Menu from './Menu.js'
import HttpList from '../component/HttpList'
import Statistics from '../component/Statistics'
import Footer from '../component/Footer.js'

class App extends Component {
    render() {
        return (<div>
                <Menu showStatistics={this.props.showStatistics}/>
                <Statistics showStatistics={this.props.showStatistics} statistics={this.props.statistics}
                            pages={this.props.pages}/>

                <div>
                    {this.props.isDataLoad || <section className="hero is-dark is-fullheight">
                        <div className="hero-body">
                            <div className="container is-center">
                                <h1 className="title is-1">
                                    LOAD YOUR HAR
                                </h1>
                            </div>
                        </div>
                    </section>}
                    {!this.props.isDataLoad || <section className="hero is-dark">
                        <div className="hero-body">
                            <div className="container is-center">
                                <h1 className="title">PAGES</h1>
                                <h2 className='subtitle'>Loaded from HAR file</h2>
                            </div>
                        </div>
                    </section>}
                    {this.props.pages.map((page, number) =>
                            <HttpList
                                entries={this.props.entries[number]}
                                page={page}
                                maxTime={this.props.maxTimes[number]}
                                dataLoad={this.props.isDataLoad}
                                number={number}
                                />
                    )}</div>
                <Footer />
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