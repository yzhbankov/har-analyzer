import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Title from '../component/Title'
import Statistics from '../component/Statistics'
import HttpList from '../component/HttpList'

class App extends Component {
    render() {
        return (<div>
                <Title />
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

export default connect(stateToComponent)(App)