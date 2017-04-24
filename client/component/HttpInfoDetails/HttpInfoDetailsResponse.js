import React, {Component} from 'react'

export default class HttpInfoDetailsResponse extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-2'><h4>Status</h4></div>
                    <div className='col-md-10'>{this.props.response.status} {this.props.response.statusText}.
                        {this.props.response.httpVersion}</div>
                </div>

                <div><h4>Response headers</h4></div>
                {
                    this.props.response.headers.map((header)=> {
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
                    <div className='col-md-2'><h4>Body size</h4></div>
                    <div className='col-md-10'>{this.props.response.bodySize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h5>Header size</h5></div>
                    <div className='col-md-10'>{this.props.response.headersSize} B</div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><h5>Total</h5></div>
                    <div className='col-md-10'>{this.props.response.bodySize + this.props.response.headersSize} B</div>
                </div>
            </div>
        )
    }
}