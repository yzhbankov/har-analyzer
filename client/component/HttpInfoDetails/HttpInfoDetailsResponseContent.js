import React, {Component} from 'react'

export default class HttpInfoDetailsResponseContent extends Component {
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
                    <td className='has-text-right has-text-bold'>Size</td>
                    <td>{this.props.content.size} B</td>
                </tr>
                <tr>
                    <td className='has-text-right has-text-bold'>MIME Type</td>
                    <td>{this.props.content.mimeType}</td>
                </tr>
                <tr>
                    <td className='has-text-right has-text-bold'>Response content</td>
                    <td>
                        <div className='box-content'>{this.props.content.text}</div>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}