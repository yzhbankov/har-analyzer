import React, {Component} from 'react'
import Radium from 'radium'

import {regularTitle, right} from '../../style/components.js'
import {blockSpacing, borderRadii, elementSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsResponse extends Component {
    render() {
        return (
            <div className='col-md-9 col-lg-6 col-sm-12 col-xs-12' style={[blockSpacing.two, {borderWidth: '1px', borderStyle:'solid', borderColor:'#c6c6c6', overflowX: 'auto'}, borderRadii.two, elementSpacing.two]}>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Status</div>
                    <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{this.props.response.status} {this.props.response.statusText}.
                        {this.props.response.httpVersion}</div>
                </div>

                <div style={[regularTitle]}>Response headers</div>
                <hr style={blockSpacing.one}/>
                {
                    this.props.response.headers.map((header) => {
                        return (
                            <div className='row'>
                                <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4'
                                     style={[regularTitle, right]}>{header.name}</div>
                                <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div style={[regularTitle]}>Size</div>
                <hr style={blockSpacing.one}/>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Body size</div>
                    <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{this.props.response.bodySize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Header size</div>
                    <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{this.props.response.headersSize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Total</div>
                    <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{this.props.response.bodySize + this.props.response.headersSize} B</div>
                </div>
            </div>
        )
    }
}