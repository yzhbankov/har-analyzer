import React, {Component} from 'react'

import '../style/HttpInfoDetailsResponseContent.less'

export default class HttpInfoDetailsResponseContent extends Component {
    render() {
        return (
            <div className='httpInfoDetailsResponseContent'>
                <div className='row'>
                    <div className='col-md-2'><h4>Size</h4></div>
                    <div className='col-md-2'>{this.props.content.size} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h4>MIME Type</h4></div>
                    <div className='col-md-2'>{this.props.content.mimeType}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h4>Response content</h4></div>
                    <div className='col-md-10'>{this.props.content.text}</div>
                </div>
            </div>
        )
    }
}