import React, {Component} from 'react'
import Radium from 'radium'

import {medeumBlockContent, regularTitle} from '../../style/components.js'
import {blockSpacing} from '../../style/style'

@Radium
export default class HttpInfoDetailsResponseContent extends Component {
    render() {
        return (
            <div style={[medeumBlockContent, blockSpacing.two]}>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Size</div>
                    <div className='col-md-2'>{this.props.content.size} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>MIME Type</div>
                    <div className='col-md-2'>{this.props.content.mimeType}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2' style={[regularTitle, {textAlign: 'right'}]}>Response content</div>
                    <div className='col-md-10'>{this.props.content.text}</div>
                </div>
            </div>
        )
    }
}