import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Radium from 'radium'
import * as HarActions from '../actions/HarActions'
import {bindActionCreators} from 'redux'
import LinkModal from '../component/modals/LinkModal'

@Radium
class Menu extends Component {
    constructor() {
        super();
        this.state = {
            modal: "modal"
        }
    }

    readFile(event) {
        this.props.getHarActions.loadHarContent(event)
    }

    saveAndShearHar() {
        this.props.getHarActions.saveHarContent(this.props.harContent);
        this.openModal();
    }

    toggleNav() {
        const nav = document.getElementsByClassName("nav-menu")[0];
        const className = nav.getAttribute("class");
        if (className == "nav-right nav-menu") {
            nav.className = "nav-right nav-menu is-active";
        } else {
            nav.className = "nav-right nav-menu";
        }
    }

    closeModal = (e) => {
        this.setState({
            modal: "modal"
        })
    }
    openModal = (e) => {
        this.setState({
            modal: "modal is-active"
        })
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
        return (<div>
                <nav className="nav has-shadow">
                    <div className="container ">
                        <div className="nav-left">
                            <a className="nav-item">
                                <img src="../etc/img/logo.png" alt="HARVIE logo"/>
                            </a>
                            <a className="nav-item is-tab is-hidden-mobile is-active">
                                <div style={[fileUploadStyle]}>
                                    <span>Load HAR</span>
                                    <input type="file" style={uploadInputStyle} onChange={this.readFile.bind(this)}/>
                                </div>
                            </a>
                            <a className="nav-item is-tab is-hidden-mobile"
                               onClick={this.props.getHarActions.showHideStatistics.bind(this, this.props.showStatistics)}>Statistics
                            </a>
                            <a className="nav-item is-tab is-hidden-mobile"
                               onClick={this.saveAndShearHar.bind(this)}>
                                Save&Shear
                            </a>
                        </div>
                        <span className="nav-toggle" onClick={this.toggleNav}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>

                        <div className="nav-right nav-menu">
                            <a className="nav-item is-tab is-hidden-tablet">
                                <div style={[fileUploadStyle]}>
                                    <span>Load HAR</span>
                                    <input type="file" style={uploadInputStyle} onChange={this.readFile.bind(this)}/>
                                </div>
                            </a>
                            <a className="nav-item is-tab is-hidden-tablet"
                               onClick={this.props.getHarActions.showHideStatistics.bind(this, this.props.showStatistics)}>Statistics
                            </a>
                            <a className="nav-item is-tab is-active" href="discuss.html">Discuss?</a>
                        </div>
                    </div>
                </nav>
                <LinkModal generatedLink={this.props.generatedLink}/>
            </div>
        )
    }
}

function stateToComponent(state) {
    const harContent = state.entries.map(entrie => {
        return entrie.map(item => {
            item.request.cookies = 'REMOVED';
            //item.response.content.text = 'REMOVED';
            return item;
        })
    });

    return {
        entries: state.entries,
        isDataLoad: state.isDataLoad,
        generatedLink: state.generatedLink,
        harContent: harContent

    }
}

function dispatchToComponent(dispatch) {
    return {
        getHarActions: bindActionCreators(HarActions, dispatch)
    }
}

export default connect(stateToComponent, dispatchToComponent)(Menu)