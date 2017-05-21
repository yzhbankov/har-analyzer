import React, {Component} from 'react'
import '../style/sass/styles.sass'

import HttpInfoDetails from '../component/HttpInfoDetails.js'
import HttpInfoTimeLine from '../component/HttpInfoTimeLine'

export default class HttpInfo extends Component {
    constructor(props) {
        super(props);
        let totalReqTime = props.totalTime;
        if (totalReqTime == null){
            for (let key in props.entrie.timings){
                totalReqTime += props.entrie.timings[key]
            }
        }
        this.state = {
            show: false,
            totalReqTime: totalReqTime
        };
    }

    onBtnClick(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <tbody>
            <tr onClick={this.onBtnClick.bind(this)}>
                <td className='is-hidden-mobile'>{this.props.number + 1}</td>
                <td className='is-hidden-mobile'><abbr title={this.props.title}><a href="#">{this.props.title.slice(0, 30)+'...'}</a></abbr></td>
                <td className='is-hidden-mobile'>{this.props.reqMethod}</td>
                <td className='is-hidden-mobile'>{this.props.resStatus}</td>
                <td className='is-hidden-mobile'>{(() => {
                    if (this.props.reqSize <= 0) {
                        return '-'
                    } else {
                        return this.props.reqSize
                    }
                })()
                }</td>
                <td className='is-hidden-mobile'>{(() => {
                    if (this.props.resSize <= 0) {
                        return '-'
                    } else {
                        return this.props.resSize
                    }
                })()
                }
                </td>
                <td className='is-hidden-mobile'>{Math.round(this.state.totalReqTime * 100) / 100}</td>
                <td>
                    <HttpInfoTimeLine entrie={this.props.entrie}
                                      page={this.props.page}
                                      maxTime={this.props.maxTime}/>
                </td>
            </tr>
            {!this.state.show || <HttpInfoDetails entrie={this.props.entrie}/>}
            </tbody>
        )
    }
}