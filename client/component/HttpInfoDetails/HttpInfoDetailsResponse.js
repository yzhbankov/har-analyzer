import React, {Component} from 'react'

export default class HttpInfoDetailsResponse extends Component {
    render() {
        return (
            <table className="table is-striped">
                <thead>
                <tr>
                    <th colSpan={2} className='is-center title is-5'>Response</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='has-text-right has-text-bold'>Status</td>
                    <td >
                        <div className="box-content">{this.props.response.status} {this.props.response.statusText}.
                            {this.props.response.httpVersion}</div>
                    </td>
                </tr>
                <tr>
                    <th colSpan={2} className="has-text-bold is-center">Response headers</th>
                </tr>
                {
                    this.props.response.headers.map((header) => {
                        return (
                            <tr>
                                <td className='has-text-right has-text-bold'>{header.name}</td>
                                <td >
                                    <div className="box-content">{header.value}</div>
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <th colSpan={2} className="has-text-bold is-center">Size</th>
                </tr>
                <tr>
                    <td className='has-text-right has-text-bold'>Body size</td>
                    <td >{this.props.response.bodySize} B</td>
                </tr>
                <tr>
                    <td className='has-text-right has-text-bold'>Header size</td>
                    <td >{this.props.response.headersSize} B</td>
                </tr>
                <tr>
                    <td className='has-text-right has-text-bold'>Total</td>
                    <td >{this.props.response.bodySize + this.props.response.headersSize} B</td>
                </tr>
                </tbody>
            </table>
        )
    }
}