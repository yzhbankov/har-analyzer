import React, {Component} from 'react'
import './style/Title.less'

export default class Title extends Component {
    readFile(event) {
        this.props.loadHarContent(event)
    }

    render() {
        return (<div>
                <div>Title</div>
                <input type="file" onChange={this.readFile.bind(this)}/>
            </div>
        )
    }
}