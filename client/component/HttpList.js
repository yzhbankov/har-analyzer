import React, {Component} from 'react'
import Radium from 'radium'

import HttpInfo from '../component/HttpInfo'
import {httpList} from '../style/component/httpList'

@Radium
export default class HttpList extends Component {
    render() {
        console.log('Entries');
        console.log(this.props.entries);
        console.log('Page info');
        console.log(this.props.pages);
        return (
            <div>
                <div className="row">
                    <div className="col-md-1" style={httpList.infoNumber}>#</div>
                    <div className="col-md-2" style={httpList.infoTitle}>Title</div>
                    <div className="col-md-1" style={httpList.infoMethod}>Request</div>
                    <div className="col-md-1" style={httpList.infoStatus}>Req status</div>
                    <div className="col-md-1" style={httpList.infoReqSize}>Req size</div>
                    <div className="col-md-1" style={httpList.infoResSize}>Res size</div>
                    <div className="col-md-1" style={httpList.infoTotalTime}>Total time</div>
                    <div className="col-md-4" style={httpList.infoTimeLine}>Time line</div>
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
                    />
                )}
            </div>
        )
    }
}