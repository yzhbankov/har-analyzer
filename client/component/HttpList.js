import React, {Component} from 'react'
import Radium from 'radium'

import HttpInfo from '../component/HttpInfo'
import {regularTitle, xxSmallBlock, xSmallBlock, xMedeumBlock, xLargeBlock, center, chapterTitle} from '../style/components.js'
import {blockSpacing} from '../style/style.js'

@Radium
export default
class HttpList extends Component {
    render() {
        return (
            <div className='row'
                 style={{minHeight: '200px', borderStyle:'solid', borderWidth:'1px', borderColor:'#c6c6c6'}}>
                <div style={{height:'32px', backgroundColor:'#c6c6c6'}}>
                    <div className="col-md-1" style={[xxSmallBlock, regularTitle]}>#</div>
                    <div className="col-md-2" style={[xMedeumBlock, regularTitle]}>Title</div>
                    <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Method</div>
                    <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Status</div>
                    <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Req size</div>
                    <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Res size</div>
                    <div className="col-md-1" style={[xSmallBlock, regularTitle]}>Total time</div>
                    <div className="col-md-4" style={[xLargeBlock, regularTitle]}>Time line</div>
                </div>
                {this.props.dataLoad ||
                <div className="col-md-12" style={[center, blockSpacing.five, chapterTitle]}>No info</div>}
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
            </div>
        )
    }
}