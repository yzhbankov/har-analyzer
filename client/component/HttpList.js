import React, {Component} from 'react'

import HttpInfo from '../component/HttpInfo'
import './style/HttpList.less'

export default class HttpList extends Component {
    render() {
        console.log('Entries');
        console.log(this.props.entries);
        console.log('Page info');
        console.log(this.props.pages);
        return (
            <div>
                <div>HttpList</div>
                <div className="row">
                    <div className="col-md-1 HttpInfoTime">Time</div>
                    <div className="col-md-2 HttpInfoTitle">Title</div>
                    <div className="col-md-1 HttpInfoMethod">Request</div>
                    <div className="col-md-1 HttpInfoStatus">Req status</div>
                    <div className="col-md-1 HttpInfoReqSize">Req size</div>
                    <div className="col-md-1 HttpInfoResSize">Res size</div>
                    <div className="col-md-5 HttpInfoTotalTime">Time line</div>
                </div>
                {this.props.entries.map(entrie =>
                    <HttpInfo
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