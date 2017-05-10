import React, {Component} from 'react'
import Radium from 'radium'

import HttpInfo from '../component/HttpInfo'
import {
    regularTitle,
    xxSmallBlock,
    xSmallBlock,
    xMedeumBlock,
    xLargeBlock,
    center,
    chapterTitle,
    left
} from '../style/components.js'
import {blockSpacing} from '../style/style.js'

@Radium
export default
class HttpList extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
        this.center = false
    }

    onBtnClick(e) {
        e.preventDefault();
        this.setState({
            show: !this.state.show,
            center: !this.state.center
        })
    }

    hightLightRow(e) {
        e.preventDefault();
        this.setState({
            color: '#dfdfdf'
        })
    }

    render() {
        let color = 'white';
        let centerTemp = {};
        if (!this.state.center) {
            centerTemp = {}
        } else {
            centerTemp = center
        }

        if (this.props.number % 2 != 0) {
            color = '#f8f8ff';
        }
        const backgroundStyle = {backgroundColor: color};
        return (<div>
                <hr style={{margin: 0}}/>
                <a href='#' style={{textDecoration: 'none'}}>
                    <div style={[chapterTitle, left, backgroundStyle, centerTemp]}
                         onClick={this.onBtnClick.bind(this)}>{this.props.page.title}
                    </div>
                </a>
                <hr style={{margin: 0}}/>

                {!this.state.show || <div className='row'
                                          style={{
                                              minHeight: '200px',
                                              borderStyle: 'solid',
                                              borderWidth: '1px',
                                              borderColor: '#c6c6c6',
                                              margin: 0
                                          }}>
                    <div style={{height: '32px', backgroundColor: '#c6c6c6'}}>
                        <div className="col-md-1" style={[xxSmallBlock, regularTitle]}>#</div>
                        <div className="col-md-2" style={[xMedeumBlock, regularTitle]}>Title</div>
                        <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Method</div>
                        <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Status</div>
                        <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Req size</div>
                        <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Res size</div>
                        <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Total time</div>
                        <div className="col-md-4" style={[xLargeBlock, regularTitle]}>Time line</div>
                    </div>
                    {this.props.entries.map((entrie, number) =>
                            <HttpInfo
                                page={this.props.page}
                                number={number}
                                entrie={entrie}
                                time={entrie.startedDateTime}
                                title={entrie.request.url}
                                reqMethod={entrie.request.method}
                                resStatus={entrie.response.status}
                                reqSize={entrie.request.headersSize}
                                resSize={entrie.response.headersSize + entrie.response.bodySize}
                                totalTime={entrie.time}
                                maxTime={this.props.maxTime}
                                />
                    )}
                </div>}</div>
        )
    }
}