import React, {Component} from 'react'

import StatisticsResponseContent from './Statistics/StatisticsResponseContent'
import StatisticsTiming from './Statistics/StatisticsTiming'
import StatisticsHeaderBodySendReceive from './Statistics/StatisticsHeaderBodySendReceive'

import './style/Statistics.less'

export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }
    showHideStatistics(){
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.showHideStatistics.bind(this)}>Get statistics</button>
                {!this.state.show || <div className="row">
                    <div className="col-md-4"><StatisticsResponseContent data={this.props.statistics.responseContent}/>
                    </div>
                    <div className="col-md-4"><StatisticsTiming data={this.props.statistics.timing}/></div>
                    <div className="col-md-4"><StatisticsHeaderBodySendReceive data={this.props.statistics.headBody}/>
                    </div>
                </div>}
            </div>
        )
    }
}