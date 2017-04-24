import React, {Component} from 'react'

import HttpInfoDetails from '../component/HttpInfoDetails.js'

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
        return (<div>
                <div className="row" onClick={this.onBtnClick.bind(this)}>
                    <div className="col-md-1 HttpInfoTime">{this.props.time}</div>
                    <div className="col-md-2 HttpInfoTitle">{this.props.title}</div>
                    <div className="col-md-1 HttpInfoMethod">{this.props.reqMethod}</div>
                    <div className="col-md-1 HttpInfoStatus">{this.props.resStatus}</div>
                    <div className="col-md-1 HttpInfoReqSize">{(() => {
                        if (this.props.reqSize <= 0) {
                            return '-'
                        } else {
                            return this.props.reqSize
                        }
                    })()
                    }</div>
                    <div className="col-md-1 HttpInfoResSize">{
                        (() => {
                            if (this.props.resSize <= 0) {
                                return '-'
                            } else {
                                return this.props.resSize
                            }
                        })()
                    }
                    </div>
                    <div className="col-md-5 HttpInfoTotalTime">{Math.round(this.props.totalTime * 100) / 100}</div>
                </div>
                {!this.state.show || <HttpInfoDetails entrie={this.props.entrie}/>}
            </div>
        )
    }
}