import React, {Component} from 'react'

export default class HttpInfoDetailsCookies extends Component {
    render() {
        return (
            <div className='column is-12 box content is-small'>
                <div className="has-text-bold is-vertical-spaceless">Request cookies</div>
                <hr/>
                {(() => {
                    if (this.props.request.cookies == 0) {
                        return <div>No cookies send</div>
                    } else {
                        return this.props.request.cookies.map(cookie => {
                            return (<div>
                                    <div className="has-text-left has-text-bold">{cookie.name}</div>
                                    <ul>
                                        <li>Value: {cookie.value}</li>
                                        <li>HTTP Only: {cookie.httpOnly}</li>
                                        <li>Expires: {cookie.expires}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                })()}
                <div className="has-text-bold is-vertical-spaceless">Response cookies</div>
                <hr/>
                {(() => {
                    if (this.props.response.cookies == 0) {
                        return <div>No cookies receive</div>
                    } else {
                        return this.props.response.cookies.map(cookie => {
                            return (<div>
                                    <div className="has-text-left has-text-bold">{cookie.name}</div>
                                    <ul>
                                        <li>Value: {cookie.value}</li>
                                        <li>HTTP Only: {cookie.httpOnly}</li>
                                        <li>Expires: {cookie.expires}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                })()}
            </div>
        )
    }
}