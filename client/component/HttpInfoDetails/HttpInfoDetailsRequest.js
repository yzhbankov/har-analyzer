import React, {Component} from 'react'

export default class HttpInfoDetailsRequest extends Component {
    render() {
        return (
            <div className="box content is-small">
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>Request URL</div>
                    <div className='column is-9 is-vertical-spaceless box-content'>{this.props.request.url}</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>
                        Request Method
                    </div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.request.method}</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>
                        Status
                    </div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.response.status}</div>
                </div>
                <div className="columns is-mobile">
                    <div className="column is-12 has-text-bold has-text-left is-vertical-spaceless">Request headers</div>
                </div>

                {
                    this.props.request.headers.map((header) => {
                        return (
                            <div className='columns is-mobile'>
                                <div
                                    className='column is-3 has-text-right has-text-bold is-vertical-spaceless'>{header.name}</div>
                                <div className='column is-9 is-vertical-spaceless box-content'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div className="columns is-mobile">
                    <div className="column is-12 has-text-bold has-text-left is-vertical-spaceless">Size</div>
                </div>

                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>
                        Body size
                    </div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.request.bodySize} B</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>
                        Header size
                    </div>
                    <div className='column is-9 is-vertical-spaceless'>{this.props.request.headersSize} B</div>
                </div>
                <div className='columns is-mobile'>
                    <div className='column is-3 has-text-right is-vertical-spaceless has-text-bold'>
                        Total
                    </div>
                    <div
                        className='column is-9 is-vertical-spaceless'>{this.props.request.bodySize + this.props.request.headersSize}
                        B
                    </div>
                </div>
            </div>
        )
    }
}