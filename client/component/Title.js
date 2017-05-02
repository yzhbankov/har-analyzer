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
                <div className="row">
                    <div className="col-md-10"><input type="file" onChange={this.readFile.bind(this)}/></div>
                    <div className="col-md-2"><a href="discuss.html">Let`s discuss</a>
                    </div>
                </div>
            </div>
        )
    }
}