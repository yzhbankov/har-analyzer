import React, {Component} from 'react'
import shortid from 'shortid'

export default class HttpInfoDetailsCookies extends Component {
    render() {
        return (
            <table className="table is-striped">
                <thead>
                <tr>
                    <th colSpan={2} className='is-center title is-5'>Response content</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th colSpan={2} className="has-text-bold is-center">Request cookies</th>
                </tr>
                {(() => {
                    if (this.props.request.cookies == 0) {
                        return <tr>
                            <td colSpan={2}>No cookies send</td>
                        </tr>
                    } else {
                        return this.props.request.cookies.map(cookie => {
                            return (<tr key={shortid.generate()}>
                                    <td className="has-text-left has-text-bold">{cookie.name.slice(0, 10)}</td>
                                    <td>
                                        <div className="box-content"><strong>Value:</strong> {cookie.value}</div>
                                        <div className="box-content"><strong>HTTP Only:</strong> {cookie.httpOnly}</div>
                                        <div className="box-content"><strong>Expires:</strong> {cookie.expires}</div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                })()}
                <tr>
                    <th colSpan={2} className="has-text-bold is-center">Response cookies</th>
                </tr>
                {(() => {
                    if (this.props.response.cookies == 0) {
                        return <tr>
                            <td colSpan={2}>No cookies receive</td>
                        </tr>
                    } else {
                        return this.props.response.cookies.map(cookie => {
                            return (<tr key={shortid.generate()}>
                                    <td className="has-text-left has-text-bold">{cookie.name.slice(0, 10)}</td>
                                    <td>
                                        <div className="box-content"><strong>Value:</strong> {cookie.value}</div>
                                        <div className="box-content"><strong>HTTP Only:</strong> {cookie.httpOnly}</div>
                                        <div className="box-content"><strong>Expires:</strong> {cookie.expires}</div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                })()}
                </tbody>
            </table>
        )
    }
}