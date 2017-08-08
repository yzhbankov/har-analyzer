import React, {Component} from 'react'
import JSONPretty from 'react-json-pretty';

const renderResponseContent =(content)=>{
    switch (content.mimeType){
        case "application/json":
            return (<JSONPretty id="json-pretty" json={content.text}></JSONPretty>);
            break;
        default:
            return (<div className='box-content'>{content.text}</div>);
    }
};

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
                        {renderResponseContent(this.props.content)}
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}