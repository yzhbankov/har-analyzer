import React, {Component} from 'react'
import Radium from 'radium'

import {regularTitle, right} from '../../style/components.js'
import {blockSpacing, borderRadii, elementSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsResponseContent extends Component {
    render() {
        return (
            <div className='col-md-9 col-lg-6 col-sm-12 col-xs-12' style={[blockSpacing.two, {borderWidth: '1px', borderStyle:'solid', borderColor:'#c6c6c6', overflowX: 'auto'}, borderRadii.two, elementSpacing.two]}>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Size</div>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4'>{this.props.content.size} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>MIME Type</div>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4'>{this.props.content.mimeType}</div>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-3 col-sm-3 col-xs-4' style={[regularTitle, right]}>Response content</div>
                    <div className='col-md-9 col-lg-9 col-sm-9 col-xs-8'>{this.props.content.text}</div>
                </div>
            </div>
        )
    }
}