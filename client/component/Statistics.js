import React, {Component} from 'react'
import Radium from 'radium'
import {defaultButton, primaryButton, successButton, regularTitle, chapterTitle, left} from '../style/components'
import {blockSpacing} from '../style/style'

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
        return (<div style={left}>
                <a href='#' onClick={this.showHideStatistics.bind(this)} style={{decoration:'none'}}>
                <div style={[defaultButton, {position: 'absolute', top: 0, left: '150px', borderWidth:'1px'}]}
                        >Show/hide statistics
                </div>
                    </a>
                {!this.state.show || <div style={chapterTitle}>STATISTICS</div>}
                {!this.state.show || this.props.statistics.map((statistic, number) => {
                    let color = 'white';
                    if (number % 2 != 0) {
                        color = '#f8f8ff';
                    }
                    const backgroundStyle = {backgroundColor: color};
                    return (
                        <div>
                            <hr style={{margin: 0}}/>
                            <a href="#" style={{textDecoration:'none'}}><div style={[chapterTitle, left, backgroundStyle, {marginLeft: '10px'}]}
                                 onClick={this.showHidePageStatistics.bind(this, number)}>{this.props.pages[number].title}</div>
                            </a>
                            <hr style={{margin: 0}}/>
                            {!this.state.showPage[number] || <div className="row" style={{margin:0}}>
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
                })
                }
            </div>
        )
    }
}