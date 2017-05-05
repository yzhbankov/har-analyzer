import React, {Component} from 'react'
import Radium from 'radium'
import {regularTitle, xxSmallBlock, xSmallBlock, xMedeumBlock, xLargeBlock} from '../style/components.js'

import HttpInfoDetails from '../component/HttpInfoDetails.js'
import HttpInfoTimeLine from '../component/HttpInfoTimeLine'

@Radium
export default
class HttpInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    onBtnClick(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let color = 'white';
        if (this.props.number % 2 == 0) {
            color = '#dfdfdf';
        }
        const backgroundStyle = {backgroundColor: color};
        return (<div className="col-md-12">
                <div className="row" style={backgroundStyle} onClick={this.onBtnClick.bind(this)}>
                    <div className="col-md-1" style={xxSmallBlock}>{this.props.number + 1}</div>
                    <div className="col-md-2" style={[xMedeumBlock, {overflowX: 'hidden', whiteSpace: 'nowrap'}]}><a
                        href='#'>{this.props.title}</a></div>
                    <div className="col-md-1" style={xSmallBlock}>{this.props.reqMethod}</div>
                    <div className="col-md-1" style={xSmallBlock}>{this.props.resStatus}</div>
                    <div className="col-md-1" style={xSmallBlock}>{(() => {
                        if (this.props.reqSize <= 0) {
                            return '-'
                        } else {
                            return this.props.reqSize
                        }
                    })()
                    }</div>
                    <div className="col-md-1" style={xSmallBlock}>{(() => {
                        if (this.props.resSize <= 0) {
                            return '-'
                        } else {
                            return this.props.resSize
                        }
                    })()
                    }
                    </div>
                    <div className="col-md-1"
                         style={xSmallBlock}>{Math.round(this.props.totalTime * 100) / 100}</div>
                    <div className="col-md-4" style={xLargeBlock}><HttpInfoTimeLine entrie={this.props.entrie}
                                                                                    page={this.props.page}
                                                                                    maxTime={this.props.maxTime}/>
                    </div>
                </div>
                {!this.state.show || <HttpInfoDetails entrie={this.props.entrie}/>}
            </div>
        )
    }
}