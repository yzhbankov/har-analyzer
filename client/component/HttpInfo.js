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
        this.state = {
            show: false,
            timeLineWidth: {width: 'calc(100% - 570px)'}
        };
    }

    componentDidMount() {
        window.addEventListener("resize", ()=> {
            if (window.innerWidth < 1200) {
                this.setState({timeLineWidth: {width: 'calc(100% - 240px)'}})
            } else {
                this.setState({timeLineWidth: {width: 'calc(100% - 570px)'}})
            }
        });
    }

    onBtnClick(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let color = 'white';
        if (this.props.number % 2 != 0) {
            color = '#f8f8ff';
        }
        const backgroundStyle = {backgroundColor: color};

        return (<div className="col-md-12 col-xs-12">
                <hr style={{margin: 0, width: '100%'}}/>
                <div className="row" style={[backgroundStyle]} onClick={this.onBtnClick.bind(this)}>
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
                    <div className="col-md-4 col-md-10 col-xs-10 col-sm-10" style={[this.state.timeLineWidth]}>
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