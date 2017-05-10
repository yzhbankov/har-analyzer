import React, {Component} from 'react'
import Radium from 'radium'
import {
    primaryTitle,
    chapterTitle,
    defaultButton,
    primaryButton,
    successButton,
    dangerButton,
    center, right
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
        let display = {display: 'true'};
        if (window.innerWidth < 1200) {
            display = {display: 'none'}
        }
        return (
            <div style={{backgroundColor:'grey', margin:'0', display:"flex"}}>
                <div style={{width: '110px'}}>
                    <div style={[fileUpload, defaultButton, {width: '110px'}]}>
                        <span>Load HAR File</span>
                        <input type="file" style={upload} onChange={this.readFile.bind(this)}/>
                    </div>
                </div>
                <div style={[primaryTitle, textColor.white, blockSpacing.one, {marginLeft:'auto', marginRight:'auto'}, display]}>HAR VIEWER</div>
                <div ><a href="discuss.html" style={{textDecoration: 'none'}}>
                    <div style={[blockSpacing.five, chapterTitle, textColor.white, {position: 'absolute', top:0, right:'50px'}]}>Let`s discuss</div>
                </a>
                </div>
            </div>
        )
    }
}