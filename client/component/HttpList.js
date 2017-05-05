import React, {Component} from 'react'
import Radium from 'radium'

import HttpInfo from '../component/HttpInfo'
import {regularTitle, xxSmallBlock, xSmallBlock, xMedeumBlock, xLargeBlock} from '../style/components.js'

@Radium
export default
class HttpList extends Component {
    render() {
        console.log('Entries');
        console.log(this.props.entries);
        console.log('Page info');
        console.log(this.props.pages);
        console.log('Max time');
        console.log(this.props.maxTime);
        return (
            <div>
                <div className="row">
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
                            page={this.props.pages[0]}
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