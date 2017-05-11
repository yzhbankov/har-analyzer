import React, {Component} from 'react'
import Radium from 'radium'

import HttpInfoDetailsRequest from './HttpInfoDetails/HttpInfoDetailsRequest.js'
import HttpInfoDetailsResponse from './HttpInfoDetails/HttpInfoDetailsResponse.js'
import HttpInfoDetailsResponseContent from './HttpInfoDetails/HttpInfoDetailsResponseContent.js'
import HtppInfoDetailsCookies from './HttpInfoDetails/HttpInfoDetailsCookies.js'

import {chapterTitle} from '../style/components.js'

@Radium
export default
class HttpInfoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reqShow: true,
            resShow: false,
            contentShow: false,
            cookiesShow: false
        }
    }

    showHideComponent(e) {
        e.preventDefault();
        const componentName = e.target.getAttribute('data-name');
        const newState = {};
        for (let key in this.state) {
            if (key == componentName) {
                newState[key] = true
            } else {
                newState[key] = false
            }
        }
        this.setState(newState);
    }

    render() {
        console.log(this.props.entrie.response);
        return (
            <div>
                <div className='row'>
                    <div className="col-md-1 hidden-xs hidden-md hidden-sm"></div>
                    <div className='col-md-1 col-lg-1 col-sm-2 col-xs-2' style={chapterTitle}><a data-name='reqShow'
                                                                      onClick={this.showHideComponent.bind(this)}
                                                                      href='#'>Request</a>
                    </div>
                    <div className='col-md-1 col-lg-1 col-sm-2 col-xs-2' style={chapterTitle}><a data-name='resShow'
                                                                      onClick={this.showHideComponent.bind(this)}
                                                                      href='#'>Response</a>
                    </div>
                    <div className='col-md-2 col-lg-2 col-sm-4 col-xs-4' style={chapterTitle}>
                        <a data-name='contentShow'
                           onClick={this.showHideComponent.bind(this)} href='#'>Response content</a>
                    </div>
                    <div className='col-md-1 col-lg-1 col-sm-2 col-xs-2' style={chapterTitle}>
                        <a data-name='cookiesShow'
                           onClick={this.showHideComponent.bind(this)} href='#'>Cookies</a>
                    </div>
                </div>
                {!this.state.reqShow ||
                <HttpInfoDetailsRequest request={this.props.entrie.request} response={this.props.entrie.response}/>}
                {!this.state.resShow || <HttpInfoDetailsResponse response={this.props.entrie.response}/>}
                {!this.state.contentShow ||
                <HttpInfoDetailsResponseContent content={this.props.entrie.response.content}/>}
                {!this.state.cookiesShow ||
                <HtppInfoDetailsCookies request={this.props.entrie.request} response={this.props.entrie.response}/>}
            </div>
        )
    }
}