import React, {Component} from 'react'
import Radium from 'radium'
import {title} from '../style/component/title'

@Radium
export default class Title extends Component {
    readFile(event) {
        this.props.loadHarContent(event)
    }

    render() {
        return (<div>
                <div style={title.center}>HAR Analyser</div>
                <input type="file" onChange={this.readFile.bind(this)}/>
            </div>
        )
    }
}