import React, {Component} from 'react'
import Radium from 'radium'
import '../style/sass/styles.sass'

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

        return (<div>
                <div className="columns is-gapless content is-small" style={[backgroundRowStyle]}
                     onClick={this.onBtnClick.bind(this)}>
                    <div className='column is-one-third'>
                        <div className='columns'>
                            <div className="column is-1 has-text-centered">{this.props.number + 1}</div>
                            <div className="column is-5 has-text-centered"
                                 style={[{overflowX: 'hidden', whiteSpace: 'nowrap'}]}><a
                                href='#'>{this.props.title}</a></div>
                            <div className="column is-6">
                                <div className="columns">
                                    <div className="column is-2 has-text-centered">{this.props.reqMethod}</div>
                                    <div className="column is-2 has-text-centered">{this.props.resStatus}</div>
                                    <div className="column is-3 has-text-centered">{(() => {
                                        if (this.props.reqSize <= 0) {
                                            return '-'
                                        } else {
                                            return this.props.reqSize
                                        }
                                    })()
                                    }</div>
                                    <div className="column is-3 has-text-centered">{(() => {
                                        if (this.props.resSize <= 0) {
                                            return '-'
                                        } else {
                                            return this.props.resSize
                                        }
                                    })()
                                    }
                                    </div>
                                    <div
                                        className="column is-2 has-text-centered">{Math.round(this.props.totalTime * 100) / 100}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-two-thirds has-text-centered" style={[timeLineWidth]}>
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