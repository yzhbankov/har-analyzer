import React, {Component} from 'react'
import Radium from 'radium'

import {medeumBlockContent, regularTitle} from '../../style/components.js'
import {blockSpacing, borderRadii, elementSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsCookies extends Component {
    render() {
        return (
            <div style={[medeumBlockContent, blockSpacing.two, {borderWidth: '1px', borderStyle:'solid', borderColor:'#c6c6c6'}, borderRadii.two, elementSpacing.two]}>
                <div style={[regularTitle]}>Request cookies</div>
                <hr style={blockSpacing.one}/>
                {(() => {
                    if (this.props.request.cookies == 0) {
                        return <div>No cookies send</div>
                    } else {
                        return this.props.request.cookies.map(cookie => {
                            return (<div>
                                    <div style={[regularTitle, {textAlign: 'left'}]}>{cookie.name}</div>
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
                <div style={[regularTitle]}>Response cookies</div>
                <hr style={blockSpacing.one}/>
                {(() => {
                    if (this.props.response.cookies == 0) {
                        return <div>No cookies send</div>
                    } else {
                        return this.props.response.cookies.map(cookie => {
                            return (<div>
                                    <div style={[regularTitle, {textAlign: 'left'}]}>{cookie.name}</div>
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