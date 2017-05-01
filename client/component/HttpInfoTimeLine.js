import React, {Component} from 'react'
import Radium from 'radium'
import {httpInfoTimeLine} from '../style/component/httpInfoTimeLine'

@Radium
export default class HttpInfoTimeLine extends Component {
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
            receiveTime: props.entrie.timings.receive
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
            receiveTime: props.entrie.timings.receive
        })
    }

    render() {
        const relativeReqTime = (this.state.totalReqTime / this.state.totalTime) * 100;
        const startStyle = {width: Math.abs(this.state.startTime / this.state.totalTime) * 100 + '%'};
        const dnsStyle = {width: Math.abs(this.state.dnsTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const connectStyle = {width: Math.abs(this.state.connectTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const blockStyle = {width: Math.abs(this.state.blockTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const sendStyle = {width: Math.abs(this.state.sendTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const waitStyle = {width: Math.abs(this.state.waitTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const receiveStyle = {width: Math.abs(this.state.receiveTime / this.state.totalReqTime) * relativeReqTime + '%'};
        const contentLoadStyle = {left: (this.state.contentLoadTime / this.state.totalTime) * 100 + '%'};
        return (
            <div style={httpInfoTimeLine.timeLine}>
                <div style={[startStyle]}>{/*{this.state.startTime}*/}</div>
                <div style={[dnsStyle, httpInfoTimeLine.dnsTime]}>{/*{this.state.dnsTime}*/}</div>
                <div style={[connectStyle, httpInfoTimeLine.connectTime]}>{/*{this.state.connectTime}*/}</div>
                <div style={[blockStyle, httpInfoTimeLine.blockTime]}>{/*{this.state.blockTime}*/}</div>
                <div style={[sendStyle, httpInfoTimeLine.sendTime]}>{/*{this.state.sendTime}*/}</div>
                <div style={[waitStyle, httpInfoTimeLine.waitTime]}>{/*{this.state.waitTime}*/}</div>
                <div style={[receiveStyle, httpInfoTimeLine.receiveTime]}>{/*{this.state.receiveTime}*/}</div>
                <div style={[contentLoadStyle, httpInfoTimeLine.contentLoad]}></div>
                <div style={httpInfoTimeLine.pageLoad}></div>
            </div>
        )
    }
}