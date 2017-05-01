import React, {Component} from 'react'
import Radium from 'radium'
import {httpList} from '../style/component/httpList'

import HttpInfoDetails from '../component/HttpInfoDetails.js'
import HttpInfoTimeLine from '../component/HttpInfoTimeLine'

@Radium
export default class HttpInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    onBtnClick() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let color = 'white';
        if (this.props.number % 2 == 0) {
            color = '#F8F8F8';
        }
        const backgroundStyle = {backgroundColor: color};
        return (<div>
                <div className="row" style={backgroundStyle} onClick={this.onBtnClick.bind(this)}>
                    <div className="col-md-1" style={httpList.infoNumber}>{this.props.number + 1}</div>
                    <div className="col-md-2" style={httpList.infoTitle}>{this.props.title}</div>
                    <div className="col-md-1" style={httpList.infoMethod}>{this.props.reqMethod}</div>
                    <div className="col-md-1" style={httpList.infoStatus}>{this.props.resStatus}</div>
                    <div className="col-md-1" style={httpList.infoReqSize}>{(() => {
                        if (this.props.reqSize <= 0) {
                            return '-'
                        } else {
                            return this.props.reqSize
                        }
                    })()
                    }</div>
                    <div className="col-md-1" style={httpList.infoResSize}>{(() => {
                        if (this.props.resSize <= 0) {
                            return '-'
                        } else {
                            return this.props.resSize
                        }
                    })()
                    }
                    </div>
                    <div className="col-md-1"
                         style={httpList.infoTotalTime}>{Math.round(this.props.totalTime * 100) / 100}</div>
                    <div className="col-md-4" style={httpList.infoTimeLine}><HttpInfoTimeLine entrie={this.props.entrie}
                                                                                              page={this.props.page}/>
                    </div>
                </div>
                {!this.state.show || <HttpInfoDetails entrie={this.props.entrie}/>}
            </div>
        )
    }
}