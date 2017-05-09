import React, {Component} from 'react'
import Radium from 'radium'
import {
    primaryTitle,
    chapterTitle,
    defaultButton,
    primaryButton,
    successButton,
    dangerButton,
    center
} from '../style/components.js'
import {textColor, blockSpacing} from '../style/style'

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
        return (
                <div className="row" style={{backgroundColor:'grey', overflow:'hidden', margin:'0'}}>
                    <div className="col-md-1">
                        <div style={[fileUpload, defaultButton]}>
                            <span>Load HAR File</span>
                            <input type="file" style={upload} onChange={this.readFile.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8" style={[primaryTitle, center, textColor.white, blockSpacing.one]}>HAR VIEWER</div>
                    <div className="col-md-2"><a href="discuss.html" style={{textDecoration: 'none'}}>
                        <div style={[blockSpacing.five, chapterTitle, center, textColor.white]}>Let`s discuss</div>
                    </a>
                    </div>
                </div>
        )
    }
}