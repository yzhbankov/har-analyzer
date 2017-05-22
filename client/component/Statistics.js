import React, {Component} from 'react'
import shortid from 'shortid'

import StatisticsResponseContent from './Statistics/StatisticsResponseContent'
import StatisticsTiming from './Statistics/StatisticsTiming'
import StatisticsHeaderBodySendReceive from './Statistics/StatisticsHeaderBodySendReceive'

export default class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPage: props.pages.map(()=> {
                return false
            })
        };
    }

    showHidePageStatistics(number) {
        const showPage = this.state.showPage;
        showPage[number] = !showPage[number];
        this.setState({
            showPage: showPage
        })
    }

    render() {
        return (<div>
                {!this.props.showStatistics || <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container is-center">
                            <h1 className="title">STATISTICS</h1>

                            <h2 className='subtitle'>Data analyze from HAR pages</h2>
                        </div>
                    </div>
                </section>}
                {!this.props.showStatistics || this.props.statistics.map((statistic, number) => {
                    return (
                        <div key={shortid.generate()}>
                            <table className='table is-bordered is-marginless'>
                                <tbody>
                                <tr>
                                    <td>
                                        <a href="#">
                                            <div className='title is-6' onClick={this.showHidePageStatistics.bind(this, number)}>{this.props.pages[number].title}</div>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            {!this.state.showPage[number] || <div className="columns">
                                <div className="column is-4 is-center">
                                    <div>Response content statistics</div>
                                    <StatisticsResponseContent data={statistic.responseContent} number={number}/>
                                </div>
                                <div className="column is-4 is-center">
                                    <div>Time statistics</div>
                                    <StatisticsTiming data={statistic.timing} number={number}/></div>
                                <div className="column is-4 is-center">
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