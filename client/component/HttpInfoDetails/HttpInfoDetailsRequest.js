import React, {Component} from 'react'
import shortid from 'shortid'

export default class HttpInfoDetailsRequest extends Component {
    render() {
        return (
                <table className="table is-striped">
                    <thead>
                    <tr>
                        <th colSpan={2} className='is-center title is-5'>Request</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className='has-text-right has-text-bold'>Request URL</td>
                        <td><div className="box-content">{this.props.request.url}</div></td>
                    </tr>
                    <tr>
                        <td className='has-text-right has-text-bold'>Request Method</td>
                        <td><div className='box-content'>{this.props.request.method}</div></td>
                    </tr>
                    <tr>
                        <td className='has-text-right has-text-bold'>Status</td>
                        <td><div className='box-content'>{this.props.response.status}</div></td>
                    </tr>
                    <tr>
                        <th colSpan={2} className="has-text-bold is-center">Request headers</th>
                    </tr>
                    {
                        this.props.request.headers.map((header) => {
                            return (
                                <tr key={shortid.generate()}>
                                    <td className='has-text-right has-text-bold '>{header.name}</td>
                                    <td><div className='box-content'>{header.value}</div></td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <th colSpan={2} className="has-text-bold is-center">Size</th>
                    </tr>
                    <tr>
                        <td className='has-text-right has-text-bold'>Body size</td>
                        <td><div className='box-content'>{this.props.request.bodySize} B</div></td>
                    </tr>
                    <tr>
                        <td className='has-text-right has-text-bold'>Header size</td>
                        <td><div className='box-content'>{this.props.request.headersSize} B</div></td>
                    </tr>
                    <tr>
                        <td className='has-text-right has-text-bold'>Total</td>
                        <td><div className='box-content'>{this.props.request.bodySize + this.props.request.headersSize} B</div></td>
                    </tr>
                    </tbody>
                </table>
        )
    }
}