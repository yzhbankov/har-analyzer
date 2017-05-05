import React, {Component} from 'react'
import Radium from 'radium'

import {medeumBlockContent, regularTitle} from '../../style/components.js'
import {blockSpacing, borderRadii, elementSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsResponse extends Component {
    render() {
        return (
            <div style={[medeumBlockContent, blockSpacing.two, {borderWidth: '1px', borderStyle:'solid', borderColor:'#c6c6c6'}, borderRadii.two, elementSpacing.two]}>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Status</div>
                    <div className='col-md-10'>{this.props.response.status} {this.props.response.statusText}.
                        {this.props.response.httpVersion}</div>
                </div>

                <div style={[regularTitle]}>Response headers</div>
                <hr style={blockSpacing.one}/>
                {
                    this.props.response.headers.map((header) => {
                        return (
                            <div className='row'>
                                <div className='col-md-2'
                                     style={[regularTitle, {textAlign: 'right'}]}>{header.name}</div>
                                <div className='col-md-10'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div style={[regularTitle]}>Size</div>
                <hr style={blockSpacing.one}/>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Body size</div>
                    <div className='col-md-10'>{this.props.response.bodySize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Header size</div>
                    <div className='col-md-10'>{this.props.response.headersSize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Total</div>
                    <div className='col-md-10'>{this.props.response.bodySize + this.props.response.headersSize} B</div>
                </div>
            </div>
        )
    }
}