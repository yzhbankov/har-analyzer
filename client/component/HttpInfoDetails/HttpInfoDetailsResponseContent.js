import React, {Component} from 'react'

export default class HttpInfoDetailsResponseContent extends Component {
    render() {
        return (
            <div className='column is-12 box content is-small'>
                <div className='columns'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Size</div>
                    <div className='column is-3 is-vertical-spaceless'>{this.props.content.size} B</div>
                </div>
                <div className='columns'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>MIME Type</div>
                    <div className='column is-3 is-vertical-spaceless'>{this.props.content.mimeType}</div>
                </div>
                <div className='columns'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Response content</div>
                    <div className='column is-9 is-vertical-spaceless box-content'>{this.props.content.text}</div>
                </div>
            </div>
        )
    }
}