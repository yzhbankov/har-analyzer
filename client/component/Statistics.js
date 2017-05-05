import React, {Component} from 'react'
import Radium from 'radium'
import {defaultButton, primaryButton, successButton, dangerButton, chapterTitle} from '../style/components'

import StatisticsResponseContent from './Statistics/StatisticsResponseContent'
import StatisticsTiming from './Statistics/StatisticsTiming'
import StatisticsHeaderBodySendReceive from './Statistics/StatisticsHeaderBodySendReceive'


@Radium
export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    showHideStatistics() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                <button style={defaultButton} onClick={this.showHideStatistics.bind(this)}>Get statistics</button>
                {!this.state.show || <div className="row">
                    <div className="col-md-4" style={chapterTitle}>
                        <div>Response content statistics</div>
                        <StatisticsResponseContent data={this.props.statistics.responseContent}/>
                    </div>
                    <div className="col-md-4" style={chapterTitle}>
                        <div>Time statistics</div>
                        <StatisticsTiming data={this.props.statistics.timing}/></div>
                    <div className="col-md-4" style={chapterTitle}>
                        <div>Head/body statistics</div>
                        <StatisticsHeaderBodySendReceive data={this.props.statistics.headBody}/>
                    </div>
                </div>}
            </div>
        )
    }
}