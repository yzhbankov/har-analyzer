import React, {Component} from 'react'

import StatisticsResponseContent from './Statistics/StatisticsResponseContent'
import StatisticsTiming from './Statistics/StatisticsTiming'
import StatisticsHeaderBodySendReceive from './Statistics/StatisticsHeaderBodySendReceive'

import './style/Statistics.less'

export default class Statistics extends Component {
    getStatistics() {
        this.props.getStatistics(this.props.entries);

    }

    render() {

        return (
            <div>
                <button onClick={this.getStatistics.bind(this)}>Get statistics</button>
                <div className="row">
                    <div className="col-md-4"><StatisticsResponseContent data={this.props.statistics.responseContent}/></div>
                    <div className="col-md-4"><StatisticsTiming data={this.props.statistics.timing}/></div>
                    <div className="col-md-4"><StatisticsHeaderBodySendReceive data={this.props.statistics.headBody}/></div>
                </div>
            </div>
        )
    }
}