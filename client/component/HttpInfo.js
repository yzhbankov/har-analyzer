import React, {Component} from 'react'
import Radium from 'radium'
import '../style/sass/styles.sass'

import HttpInfoDetails from '../component/HttpInfoDetails.js'
import HttpInfoTimeLine from '../component/HttpInfoTimeLine'

@Radium
export default
class HttpInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    onBtnClick(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let backgroundRowColor = 'white';
        let timeLineWidth = {width: 'calc(100% - 570px)'};
        if (this.props.number % 2 != 0) {
            backgroundRowColor = '#f8f8ff';
        }
        const backgroundRowStyle = {backgroundColor: backgroundRowColor};
        if (window.innerWidth < 1200) {
            timeLineWidth = {width: 'calc(100% - 240px)'}
        }

        return (
            <tbody>
            <tr onClick={this.onBtnClick.bind(this)}>
                <td>{this.props.number + 1}</td>
                <td><abbr title={this.props.title}><a href="#">{this.props.title.slice(0, 40)}</a></abbr></td>
                <td>{this.props.reqMethod}</td>
                <td>{this.props.resStatus}</td>
                <td>{(() => {
                    if (this.props.reqSize <= 0) {
                        return '-'
                    } else {
                        return this.props.reqSize
                    }
                })()
                }</td>
                <td>{(() => {
                    if (this.props.resSize <= 0) {
                        return '-'
                    } else {
                        return this.props.resSize
                    }
                })()
                }
                </td>
                <td>{Math.round(this.props.totalTime * 100) / 100}</td>
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