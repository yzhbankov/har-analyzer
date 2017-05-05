import React, {Component} from 'react'
import Radium from 'radium'
import {primaryTitle, chapterTitle, defaultButton, primaryButton, successButton, dangerButton, medeumBlock, center} from '../style/components.js'

@Radium
export default
class Title extends Component {
    readFile(event) {
        this.props.loadHarContent(event)
    }

    render() {
        const fileUpload = {
            position: 'relative',
            overflow: 'hidden',
            margin: '10px'
        };
        const upload = {
            position: 'absolute',
            top: 0,
            right: 0,
            margin: 0,
            padding: 0,
            fontSize: '20px',
            cursor: 'pointer',
            opacity: 0,
            filter: 'alpha(opacity=0)'
        };
        return (<div>
                <div style={primaryTitle}>HAR Analyser</div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="btn btn-primary" style={[fileUpload, primaryButton]}>
                            <span>Upload</span>
                            <input type="file" style={upload} onChange={this.readFile.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-2"><a href="discuss.html" style={{textDecoration:'none'}}>
                        <div style={[successButton, medeumBlock, center]}>Let`s discuss</div>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}