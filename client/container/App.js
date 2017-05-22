import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as HarActions from '../actions/HarActions'

import Menu from './Menu.js'
import HttpList from '../component/HttpList'
import Statistics from '../component/Statistics'
import Footer from '../component/Footer.js'

class App extends Component {
    readFile(event) {
        this.props.getHarActions.loadHarContent(event);
    }

    bodyReadFile(event){
        event.stopPropagation();
        document.querySelector('input').click();
    }

    render() {
        const fileUploadStyle = {
            position: 'relative',
            overflow: 'hidden'
        };
        const uploadInputStyle = {
            position: 'absolute',
            top: '0',
            right: 0,
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            opacity: 0,
            filter: 'alpha(opacity=0)'
        };
        return (<div>
                <Menu showStatistics={this.props.showStatistics}/>
                <Statistics showStatistics={this.props.showStatistics} statistics={this.props.statistics}
                            pages={this.props.pages}/>

                <div>
                    {this.props.isDataLoad || <section className="hero is-dark is-fullheight">
                        <div className="hero-body" onClick={this.bodyReadFile}>
                            <div style={fileUploadStyle} className="container is-center">
                                <h1 className="title is-5">
                                    LOAD YOUR HAR
                                </h1>
                                <div className="is-small is-hidden-touch">You can simply drag and drop your file here</div>
                                <div className="is-small is-hidden-desktop">You can simply click here</div>
                                <input type="file" style={uploadInputStyle} onChange={this.readFile.bind(this)} onDrop={this.readFile.bind(this)}/>
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

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(App)