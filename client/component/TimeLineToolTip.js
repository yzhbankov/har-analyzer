import React, {Component} from 'react'

export default class TimeLineToolTip extends Component {
    render() {
        function isNegative(num) {
            if (num > 0) {
                return num
            } else {
                return 0
            }
        }

        let top = 0;
        let left = 0;

        if (this.props.position) {
            top = this.props.position.y + 'px';
            left = this.props.position.x + 20 + 'px';
        }
        const pos = {
            position: 'fixed',
            top: top,
            left: left,
            zIndex: 99999,
            backgroundColor: 'white'

        };

        const blockTimeVal = isNegative(this.props.data.blockTime);
        const connectTimeVal = isNegative(this.props.data.connectTime);
        const dnsTimeVal = isNegative(this.props.data.dnsTime);
        const receiveTimeVal = isNegative(this.props.data.receiveTime);
        const sendTimeVal = isNegative(this.props.data.sendTime);
        const sslTimeVal = isNegative(this.props.data.sslTime);
        const waitTimeVal = isNegative(this.props.data.waitTime);

        const dnsRelativeToReq = Math.round(blockTimeVal * 100) / 100;
        const connectRelativeToReq = Math.round((dnsRelativeToReq + dnsTimeVal) * 100) / 100;
        const sslRelativeToReq = Math.round((connectRelativeToReq + connectTimeVal) * 100) / 100;
        const sendRelativeToReq = Math.round((sslRelativeToReq + sslTimeVal) * 100) / 100;
        const waitRelativeToReq = Math.round((sendRelativeToReq + sendTimeVal) * 100) / 100;
        const receiveRelativeToReq = Math.round((waitRelativeToReq + waitTimeVal) * 100) / 100;

        return (
            <div className="box is-hidden-mobile" style={pos}>
                <table>
                    <thead>
                    <tr>
                        <td colSpan={1}>+{Math.round(this.props.data.startTime)}ms</td>
                        <td colSpan={3}>Request start time since the beginning</td>
                    </tr>
                    <tr>
                        <th colSpan={4}>Request phases start and elapsed time relative to the request status:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="blockTime"></div>
                        </td>
                        <td>0ms</td>
                        <td>{blockTimeVal}ms</td>
                        <td>Blocking</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="dnsTime"></div>
                        </td>
                        <td>+{dnsRelativeToReq}ms</td>
                        <td>{dnsTimeVal}ms</td>
                        <td>DNS Lookup</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="connectTime"></div>
                        </td>
                        <td>+{connectRelativeToReq}ms</td>
                        <td>{connectTimeVal}ms</td>
                        <td>Connecting</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="sslTime"></div>
                        </td>
                        <td>+{sslRelativeToReq}ms</td>
                        <td>{sslTimeVal}ms</td>
                        <td>SSL</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="sendTime"></div>
                        </td>
                        <td>+{sendRelativeToReq}ms</td>
                        <td>{sendTimeVal}ms</td>
                        <td>Sending</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="waitTime"></div>
                        </td>
                        <td>+{waitRelativeToReq}ms</td>
                        <td>{waitTimeVal}ms</td>
                        <td>Waiting</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="receiveTime"></div>
                        </td>
                        <td>+{receiveRelativeToReq}ms</td>
                        <td>{receiveTimeVal}ms</td>
                        <td>Receiving</td>
                    </tr>
                    <tr><th colSpan={4}>Event timing relative to the request start:</th></tr>
                    <tr>
                        <td>
                            <div className="contentLoadToolTip"></div>
                        </td>
                        <td>{Math.round(this.props.data.contentLoadTime - this.props.data.startTime)}ms</td>
                        <td colSpan={2}>DOM Loaded</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="pageLoadToolTip"></div>
                        </td>
                        <td>{Math.round(this.props.data.totalTime - this.props.data.startTime)}ms</td>
                        <td colSpan={2}>Page Loaded</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}