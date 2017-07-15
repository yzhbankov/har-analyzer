import React, {Component} from 'react'

import HttpInfoDetailsRequest from './HttpInfoDetails/HttpInfoDetailsRequest.js'
import HttpInfoDetailsResponse from './HttpInfoDetails/HttpInfoDetailsResponse.js'
import HttpInfoDetailsResponseContent from './HttpInfoDetails/HttpInfoDetailsResponseContent.js'
import HtppInfoDetailsCookies from './HttpInfoDetails/HttpInfoDetailsCookies.js'

export default class HttpInfoDetails extends Component {
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
        return (<tr>
                <td colSpan={8}>
                    <div className="box">
                        <div className='columns is-mobile'>
                            <div className='column is-2 has-text-centered'>
                                {/* Mobile size*/}
                                <a className='button is-hidden-tablet is-small'
                                                                              data-name='reqShow'
                                                                              onClick={this.showHideComponent.bind(this)}
                                                                              href='#'>RQ</a>
                                {/*Desktop size*/}
                                <a className='button is-hidden-mobile'
                                                                               data-name='reqShow'
                                                                               onClick={this.showHideComponent.bind(this)}
                                                                               href='#'>Request</a>
                            </div>

                            <div className='column is-2 has-text-centered'>
                                {/*Mobile size*/}
                                <a className='button is-hidden-tablet is-small'
                                                                              data-name='resShow'
                                                                              onClick={this.showHideComponent.bind(this)}
                                                                              href='#'>RS</a>
                                {/*Desktop size*/}
                                <a className='button is-hidden-mobile'
                                                                               data-name='resShow'
                                                                               onClick={this.showHideComponent.bind(this)}
                                                                               href='#'>Response</a>
                            </div>

                            <div className='column is-2 has-text-centered'>
                                {/*Mobile size*/}
                                <a className='button is-hidden-tablet is-small' data-name='contentShow'
                                                                                onClick={this.showHideComponent.bind(this)}
                                                                                href='#'>RC</a>
                                {/*Desktop size*/}
                                <a className='button is-hidden-mobile' data-name='contentShow'
                                                                                onClick={this.showHideComponent.bind(this)}
                                                                                href='#'>Response content</a>

                            </div>
                            <div className='column is-2 has-text-centered'>
                                {/*Mobile size*/}
                                <a className='button is-hidden-tablet is-small' data-name='cookiesShow'
                                                                                onClick={this.showHideComponent.bind(this)}
                                                                                href='#'>C</a>
                                {/*Desktop size*/}
                                <a className='button is-hidden-mobile' data-name='cookiesShow'
                                                                                onClick={this.showHideComponent.bind(this)}
                                                                                href='#'>Cookies</a>
                            </div>
                        </div>
                        {!this.state.reqShow ||
                        <HttpInfoDetailsRequest request={this.props.entrie.request}
                                                response={this.props.entrie.response}/>}
                        {!this.state.resShow || <HttpInfoDetailsResponse response={this.props.entrie.response}/>}
                        {!this.state.contentShow ||
                        <HttpInfoDetailsResponseContent content={this.props.entrie.response.content}/>}
                        {!this.state.cookiesShow ||
                        <HtppInfoDetailsCookies request={this.props.entrie.request}
                                                response={this.props.entrie.response}/>}
                    </div>
                </td>
            </tr>
        )
    }
}