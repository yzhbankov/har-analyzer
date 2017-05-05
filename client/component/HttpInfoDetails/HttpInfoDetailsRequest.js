import React, {Component} from 'react'
import Radium from 'radium'

import {medeumBlockContent, regularTitle} from '../../style/components.js'
import {blockSpacing, borderRadii, elementSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsRequest extends Component {
    render() {
        return (
            <div style={[medeumBlockContent, blockSpacing.two, {borderWidth: '1px', borderStyle:'solid', borderColor:'#c6c6c6'}, borderRadii.two, elementSpacing.two]}>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Request URL</div>
                    <div className='col-md-10'>{this.props.request.url}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Request Method</div>
                    <div className='col-md-10'>{this.props.request.method}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Status</div>
                    <div className='col-md-10'>{this.props.response.status}</div>
                </div>
                <div style={regularTitle}>Request headers</div>
                <hr style={blockSpacing.one}/>
                {
                    this.props.request.headers.map((header)=> {
                        return (
                            <div className='row'>
                                <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>{header.name}</div>
                                <div className='col-md-10'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div style={regularTitle}>Size</div>
                <hr style={blockSpacing.one}/>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Body size</div>
                    <div className='col-md-10'>{this.props.request.bodySize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Header size</div>
                    <div className='col-md-10'>{this.props.request.headersSize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign:'right'}]}>Total</div>
                    <div className='col-md-10'>{this.props.request.bodySize + this.props.request.headersSize} B</div>
                </div>
            </div>
        )
    }
}