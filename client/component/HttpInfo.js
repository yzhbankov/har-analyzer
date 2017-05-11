import React, {Component} from 'react'
import Radium from 'radium'
import {xxSmallBlock, xSmallBlock, xMedeumBlock} from '../style/components.js'

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

        return (<div className="col-md-12 col-xs-12">
                <hr style={{margin: 0, width: '100%'}}/>
                <div className="row" style={[backgroundRowStyle]} onClick={this.onBtnClick.bind(this)}>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm"
                         style={xxSmallBlock}>{this.props.number + 1}</div>
                    <div className="col-md-2 col-xs-2"
                         style={[xMedeumBlock, {overflowX: 'hidden', whiteSpace: 'nowrap'}]}><a
                        href='#'>{this.props.title}</a></div>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm"
                         style={xSmallBlock}>{this.props.reqMethod}</div>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm"
                         style={xSmallBlock}>{this.props.resStatus}</div>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm" style={xSmallBlock}>{(() => {
                        if (this.props.reqSize <= 0) {
                            return '-'
                        } else {
                            return this.props.reqSize
                        }
                    })()
                    }</div>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm" style={xSmallBlock}>{(() => {
                        if (this.props.resSize <= 0) {
                            return '-'
                        } else {
                            return this.props.resSize
                        }
                    })()
                    }
                    </div>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm"
                         style={xSmallBlock}>{Math.round(this.props.totalTime * 100) / 100}</div>
                    <div className="col-md-4 col-md-10 col-xs-10 col-sm-10" style={[timeLineWidth]}>
                        <HttpInfoTimeLine entrie={this.props.entrie}
                                          page={this.props.page}
                                          maxTime={this.props.maxTime}/>
                    </div>
                </div>
                {!this.state.show || <HttpInfoDetails entrie={this.props.entrie}/>}
            </div>
        )
    }
}