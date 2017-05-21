import React, {Component} from 'react'

import TimeLineToolTip from './TimeLineToolTip.js'
import {timeLine} from '../style/components.js'

export default class HttpInfoTimeLine extends Component {
    constructor(props) {
        let totalTime = props.page.pageTimings.onLoad;
        let maxTime = props.maxTime;
        if (totalTime > maxTime) {
            maxTime = totalTime
        }
        super(props);
        let totalReqTime = props.entrie.time;
        if (totalReqTime == null){
            for (let key in props.entrie.timings){
                totalReqTime += props.entrie.timings[key]
            }
        }

        this.state = {
            totalTime: totalTime,
            contentLoadTime: props.page.pageTimings.onContentLoad,
            totalReqTime: totalReqTime,
            startTime: Date.parse(props.entrie.startedDateTime) - Date.parse(props.page.startedDateTime),
            dnsTime: props.entrie.timings.dns,
            connectTime: props.entrie.timings.connect,
            blockTime: props.entrie.timings.blocked,
            sendTime: props.entrie.timings.send,
            waitTime: props.entrie.timings.wait,
            receiveTime: props.entrie.timings.receive,
            sslTime: props.entrie.timings.ssl,
            showToolTip: false,
            maxTime: maxTime
        }
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

        if ((e.clientX + 550) > window.innerWidth) {
            e.clientX = e.clientX - 550
        }
        if ((e.clientY + 420) > window.innerHeight) {
            e.clientY = e.clientY - 420
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
        console.log(this.state.maxTime);
        return (
            <div style={timeLine} onMouseOver={this.showToolTip.bind(this)} onMouseOut={this.hideToolTip.bind(this)}
                 onMouseMove={this.posToolTip.bind(this)}>
                <div className="startTime" style={startStyle}>{/*{this.state.startTime}*/}</div>
                <div className="blockTime" style={blockStyle}>{/*{this.state.blockTime}*/}</div>
                <div className="dnsTime" style={dnsStyle}>{/*{this.state.dnsTime}*/}</div>
                <div className="connectTime" style={connectStyle}>{/*{this.state.connectTime}*/}</div>
                <div className="sslTime" style={sslStyle}>{/*{this.state.waitTime}*/}</div>
                <div className="sendTime" style={sendStyle}>{/*{this.state.sendTime}*/}</div>
                <div className="waitTime" style={waitStyle}>{/*{this.state.waitTime}*/}</div>
                <div className="receiveTime" style={receiveStyle}>{/*{this.state.receiveTime}*/}</div>
                <div>{Math.round(this.state.totalReqTime * 10) / 10}ms</div>
                <div className="contentLoad" style={contentLoadStyle}></div>
                <div className="pageLoad" style={pageLoadStyle}></div>
                {!this.state.showToolTip || <TimeLineToolTip data={this.state} position={this.state.toolTipPos}/>}
            </div>
        )
    }
}