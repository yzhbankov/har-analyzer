import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import * as HarActions from '../actions/HarActions'
import {bindActionCreators} from 'redux'

import {primaryTitle, chapterTitle, defaultButton} from '../style/components.js'
import {textColor, blockSpacing} from '../style/style'

@Radium class Menu extends Component {
    readFile(event) {
        this.props.getHarActions.loadHarContent(event)
    }

    render() {
        const fileUploadStyle = {
            position: 'relative',
            overflow: 'hidden',
            margin: '10px'
        };
        const uploadInputStyle = {
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
            <div style={{backgroundColor:'grey', margin:'0', display:"flex"}}>
                <div style={[fileUploadStyle, defaultButton]}>
                    <span>Load HAR File</span>
                    <input type="file" style={uploadInputStyle} onChange={this.readFile.bind(this)}/>
                </div>

                <div>
                    <a href='#'
                       onClick={this.props.getHarActions.showHideStatistics.bind(this, this.props.showStatistics)}
                       style={{decoration:'none'}}>
                        <div style={[defaultButton]}>
                            Show/hide statistics
                        </div>
                    </a>
                </div>

                <div className='hidden-sm hidden-xs'
                     style={[primaryTitle, textColor.white, blockSpacing.one, {marginLeft:'auto', marginRight:'auto'}]}>
                    HAR VIEWER
                </div>

                <div>
                    <a href="discuss.html" style={{textDecoration: 'none'}}>
                        <div
                            style={[blockSpacing.five, chapterTitle, textColor.white, {position: 'absolute', top:0, right:'50px'}]}>
                            Let`s discuss
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(null, dispatchToComponent)(Menu)