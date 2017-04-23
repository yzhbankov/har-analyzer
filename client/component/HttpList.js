import React, {Component} from 'react'

import HttpInfo from '../component/HttpInfo'

export default class HttpList extends Component {
    render() {
        return (
            <div>
                <div>HttpList</div>
                {this.props.entries.map(entrie =>
                    <HttpInfo />
                )}
            </div>
        )
    }
}