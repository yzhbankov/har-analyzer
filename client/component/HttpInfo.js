import React, {Component} from 'react'

export default class HttpInfo extends Component {
    render() {
        return (
            <div className="row">
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
                <div className="col-md-5 HttpInfoTotalTime">{Math.round(this.props.totalTime*100)/100}</div>
            </div>
        )
    }
}