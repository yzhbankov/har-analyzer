import React, {Component} from 'react'
import Radium from 'radium'
import {defaultButton, primaryButton, successButton, regularTitle, chapterTitle, center} from '../style/components'

import StatisticsResponseContent from './Statistics/StatisticsResponseContent'
import StatisticsTiming from './Statistics/StatisticsTiming'
import StatisticsHeaderBodySendReceive from './Statistics/StatisticsHeaderBodySendReceive'


@Radium
export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showPage: [false, false, false]
        };
    }

    showHideStatistics() {

        this.setState({
            show: !this.state.show
        })
    }

    showHidePageStatistics(number) {
        const showPage = this.state.showPage;
        showPage[number] = !showPage[number];
        this.setState({
            showPage: showPage
        })
    }

    render() {
        return (
            <div style={center}>
                <button style={defaultButton} onClick={this.showHideStatistics.bind(this)}>Get statistics</button>
                {!this.state.show || this.props.statistics.map((statistic, number) =>
                    <div>
                        <button
                            onClick={this.showHidePageStatistics.bind(this, number)}>{this.props.pages[number].title}</button>
                        {!this.state.showPage[number] || <div className="row">
                            <div style={chapterTitle}>{this.props.pages[number].title}</div>
                            <div className="col-md-4" style={regularTitle}>
                                <div>Response content statistics</div>
                                <StatisticsResponseContent data={statistic.responseContent} number={number}/>
                            </div>
                            <div className="col-md-4" style={regularTitle}>
                                <div>Time statistics</div>
                                <StatisticsTiming data={statistic.timing} number={number}/></div>
                            <div className="col-md-4" style={regularTitle}>
                                <div>Head/body statistics</div>
                                <StatisticsHeaderBodySendReceive data={statistic.headBody} number={number}/>
                            </div>
                        </div>}
                    </div>)
                }

            </div>
        )
    }
}