import React, {Component} from 'react'
import Radium from 'radium'

import {medeumBlockContent} from '../../style/components.js'

@Radium
export default class HttpInfoDetailsCookies extends Component {
    render() {
        return (
            <div style={medeumBlockContent}>
                <div><h4>Request cookies</h4></div>
                {(()=> {
                    if (this.props.request.cookies == 0) {
                        return <div>No cookies send</div>
                    } else {
                        return this.props.request.cookies.map(cookie=> {
                            return (<div>
                                    <div><strong>{cookie.name}</strong></div>
                                    <div>Value: {cookie.value}</div>
                                    <div>HTTP Only: {cookie.httpOnly}</div>
                                    <div>Expires: {cookie.expires}</div>
                                </div>
                            )
                        })
                    }
                })()}
                <div><h4>Response cookies</h4></div>
                {(()=> {
                    if (this.props.response.cookies == 0) {
                        return <div>No cookies send</div>
                    } else {
                        return this.props.response.cookies.map(cookie=> {
                            return (<div>
                                    <div><strong>{cookie.name}</strong></div>
                                    <div>Value: {cookie.value}</div>
                                    <div>HTTP Only: {cookie.httpOnly}</div>
                                    <div>Expires: {cookie.expires}</div>
                                </div>
                            )
                        })
                    }
                })()}
            </div>
        )
    }
}