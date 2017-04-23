import React, {Component} from 'react'

import HttpInfo from '../component/HttpInfo'
import './style/HttpList.less'

export default class HttpList extends Component {
    render() {
        console.log('Entries');
        console.log(this.props.entries);
        console.log('Page info');
        console.log(this.props.pages);
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