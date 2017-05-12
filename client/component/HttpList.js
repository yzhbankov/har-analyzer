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

                {!this.state.show || <div>
                    <div className='columns notification is-primary is-gapless content is-small'>
                        <div className='column is-one-third'>
                            <div className='columns'>
                                <div className="column is-1 has-text-centered">#</div>
                                <div className="column is-5 has-text-centered">Title</div>
                                <div className="column is-6">
                                    <div className="columns">
                                        <div className="column is-2 has-text-centered">Method</div>
                                        <div className="column is-2 has-text-centered">Status</div>
                                        <div className="column is-3 has-text-centered">Req size</div>
                                        <div className="column is-3 has-text-centered">Res size</div>
                                        <div className="column is-2 has-text-centered">Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-two-thirds has-text-centered">Time line</div>
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