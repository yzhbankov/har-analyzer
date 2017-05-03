import React, {Component} from 'react'
import Radium from 'radium'
import {primaryTitle, chapterTitle} from '../style/components.js'

@Radium
export default class Title extends Component {
    readFile(event) {
        this.props.loadHarContent(event)
    }

    render() {
        return (<div>
                <div style={primaryTitle}>HAR Analyser</div>
                <div className="row">
                    <div className="col-md-10"><input type="file" onChange={this.readFile.bind(this)}/></div>
                    <div className="col-md-2" style={chapterTitle}><a href="discuss.html">Let`s discuss</a>
                    </div>
                </div>
            </div>
        )
    }
}