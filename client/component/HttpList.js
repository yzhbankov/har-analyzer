import React, {Component} from 'react'

import HttpInfo from '../component/HttpInfo'
import '../style/sass/styles.sass'

export default class HttpList extends Component {
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

    hightLightRow(e) {
        e.preventDefault();
        this.setState({
            color: '#dfdfdf'
        })
    }

    render() {
        return (<div>
                <a href='#'>
                    <div className='title is-6' onClick={this.onBtnClick.bind(this)}>{this.props.page.title}
                    </div>
                </a>

                {!this.state.show || <table className="table is-bordered is-striped is-narrow content is-small">
                    <col width="2%" />
                    <col width="10%" />
                    <col width="2%" />
                    <col width="2%" />
                    <col width="2%" />
                    <col width="2%" />
                    <col width="2%" />
                    <col width="78%" />
                    <thead>
                    <tr className="is-selected">
                        <th>#</th>
                        <th><abbr title="Title">Title</abbr></th>
                        <th><abbr title="Request method">M</abbr></th>
                        <th><abbr title="Status">S</abbr></th>
                        <th><abbr title="Request size, b">Req</abbr></th>
                        <th><abbr title="Response size, b">Res</abbr></th>
                        <th><abbr title="Total time, ms">T</abbr></th>
                        <th><abbr title="Time line">TL</abbr></th>
                    </tr>
                    </thead>

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
                </table>}</div>
        )
    }
}