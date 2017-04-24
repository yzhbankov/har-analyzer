import React, {Component} from 'react'


export default class HttpInfoDetailsRequest extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-2'><h4>Request URL</h4></div>
                    <div className='col-md-10'>{this.props.request.url}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h4>Request Method</h4></div>
                    <div className='col-md-10'>{this.props.request.method}</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h4>Status</h4></div>
                    <div className='col-md-10'>{this.props.response.status}</div>
                </div>
                <div><h4>Request headers</h4></div>
                {
                    this.props.request.headers.map((header)=> {
                        return (
                            <div className='row'>
                                <div className='col-md-2'><h5>{header.name}</h5></div>
                                <div className='col-md-10'>{header.value}</div>
                            </div>
                        )
                    })
                }
                <div><h4>Size</h4></div>
                <div className='row'>
                    <div className='col-md-2'><h5>Body size</h5></div>
                    <div className='col-md-10'>{this.props.request.bodySize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h5>Header size</h5></div>
                    <div className='col-md-10'>{this.props.request.headersSize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h5>Total</h5></div>
                    <div className='col-md-10'>{this.props.request.bodySize + this.props.request.headersSize} B</div>
                </div>
            </div>
        )
    }
}