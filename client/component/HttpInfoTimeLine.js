import React, {Component} from 'react'
import Radium from 'radium'
import TimeLineToolTip from './TimeLineToolTip.js'
import {timeLine, dnsTime, connectTime, sslTime, blockTime, sendTime, waitTime, receiveTime, contentLoad, pageLoad} from '../style/components.js'

@Radium
export default
class HttpInfoTimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: props.page.pageTimings.onLoad,
            contentLoadTime: props.page.pageTimings.onContentLoad,
            totalReqTime: props.entrie.time,
            startTime: Date.parse(props.entrie.startedDateTime) - Date.parse(props.page.startedDateTime),
            dnsTime: props.entrie.timings.dns,
            connectTime: props.entrie.timings.connect,
            blockTime: props.entrie.timings.blocked,
            sendTime: props.entrie.timings.send,
            waitTime: props.entrie.timings.wait,
            receiveTime: props.entrie.timings.receive,
            sslTime: props.entrie.timings.ssl,
            showToolTip: false,
            maxTime: props.maxTime
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            totalTime: props.page.pageTimings.onLoad,
            contentLoadTime: props.page.pageTimings.onContentLoad,
            totalReqTime: props.entrie.time,
            startTime: Date.parse(props.entrie.startedDateTime) - Date.parse(props.page.startedDateTime),
            dnsTime: props.entrie.timings.dns,
            connectTime: props.entrie.timings.connect,
            blockTime: props.entrie.timings.blocked,
            sendTime: props.entrie.timings.send,
            waitTime: props.entrie.timings.wait,
            receiveTime: props.entrie.timings.receive,
            sslTime: props.entrie.timings.ssl,
            maxTime: props.maxTime
        })
    }

    showToolTip(e) {
        e.preventDefault();
        this.setState({
            showToolTip: true
        })
    }

    hideToolTip(e) {
        e.preventDefault();
        this.setState({
            showToolTip: false
        })
    }

    posToolTip(e) {
        e.preventDefault();

        if ((e.clientX + 440) > window.innerWidth){
            e.clientX = e.clientX - 440
        }
        if ((e.clientY + 300) > window.innerHeight){
            e.clientY = e.clientY - 300
        }

        this.setState({
            toolTipPos: {
                x: e.clientX - 20,
                y: e.clientY + 30
            }
        });
    }

    render() {
        const relativeReqTime = (this.state.totalReqTime / this.state.maxTime) * 100;
        const startStyle = {width: Math.abs(this.state.startTime / this.state.maxTime) * 100 + '%'};
        const dnsStyle = {width: Math.abs(this.state.dnsTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const connectStyle = {width: Math.abs(this.state.connectTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const blockStyle = {width: Math.abs(this.state.blockTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const sendStyle = {width: Math.abs(this.state.sendTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const waitStyle = {width: Math.abs(this.state.waitTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const receiveStyle = {width: Math.abs(this.state.receiveTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const contentLoadStyle = {left: (this.state.contentLoadTime / this.state.maxTime) * 100 + '%'};
        const sslStyle = {width: Math.abs(this.state.sslTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const pageLoadStyle = {left: (this.state.totalTime / this.state.maxTime) * 100 + '%'};
        return (
            <div style={timeLine} onMouseOver={this.showToolTip.bind(this)} onMouseOut={this.hideToolTip.bind(this)}
                 onMouseMove={this.posToolTip.bind(this)}>
                <div style={[startStyle]}>{/*{this.state.startTime}*/}</div>
                <div style={[blockStyle, blockTime]}>{/*{this.state.blockTime}*/}</div>
                <div style={[connectStyle, connectTime]}>{/*{this.state.connectTime}*/}</div>
                <div style={[dnsStyle, dnsTime]}>{/*{this.state.dnsTime}*/}</div>
                <div style={[receiveStyle, receiveTime]}>{/*{this.state.receiveTime}*/}</div>
                <div style={[sendStyle, sendTime]}>{/*{this.state.sendTime}*/}</div>
                <div style={[sslStyle, sslTime]}>{/*{this.state.waitTime}*/}</div>
                <div style={[waitStyle, waitTime]}>{/*{this.state.waitTime}*/}</div>

                <div style={[contentLoadStyle, contentLoad]}></div>
                <div style={[pageLoad, pageLoadStyle]}></div>
                {!this.state.showToolTip || <TimeLineToolTip data={this.state} position={this.state.toolTipPos}/>}
            </div>
        )
    }
}