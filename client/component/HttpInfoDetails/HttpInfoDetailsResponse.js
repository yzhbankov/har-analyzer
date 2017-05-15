import React, {Component} from 'react'

export default class HttpInfoDetailsResponse extends Component {
    render() {
        return (
            <div className='column is-12 box content is-small'>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Status</div>
                    <div
                        className='column is-9 is-vertical-spaceless box-content'>{this.props.response.status} {this.props.response.statusText}.
                        {this.props.response.httpVersion}</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column is-12 has-text-bold has-text-left is-vertical-spaceless">Response headers
                    </div>
                </div>
                {
                    this.props.response.headers.map((header) => {
                        return (
                            <div className='columns is-mobile'>
                                <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>{header.name}</div>
                                <div className='column is-9 is-vertical-spaceless box-content'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div className="columns is-mobile">
                    <div className="column is-3 has-text-bold is-vertical-spaceless has-text-left">Size</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Body size</div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.response.bodySize} B</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Header size</div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.response.headersSize} B</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Total</div>
                    <div
                        className='column is-9 is-vertical-spaceless'>{this.props.response.bodySize + this.props.response.headersSize}
                        B
                    </div>
                </div>
            </div>
        )
    }
}