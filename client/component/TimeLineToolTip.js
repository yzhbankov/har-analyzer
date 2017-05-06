import React, {Component} from 'react'
import Radium from 'radium'
import {
    regularTitle,
    dnsTime,
    connectTime,
    sslTime,
    blockTime,
    sendTime,
    waitTime,
    contentLoad,
    pageLoad,
    receiveTime
} from '../style/components.js'
import {blockSpacing, elementSpacing, shadows, borderRadii} from '../style/style'

@Radium
export default
class TimeLineToolTip extends Component {
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
            backgroundColor: 'white',
            minWidth: '440px'
        };

        const blockTimeVal = isNegative(this.props.data.blockTime);
        const connectTimeVal = isNegative(this.props.data.connectTime);
        const dnsTimeVal = isNegative(this.props.data.dnsTime);
        const receiveTimeVal = isNegative(this.props.data.receiveTime);
        const sendTimeVal = isNegative(this.props.data.sendTime);
        const sslTimeVal = isNegative(this.props.data.sslTime);
        const waitTimeVal = isNegative(this.props.data.waitTime);

        const connectRelativeToReq = Math.round(blockTimeVal * 100) / 100;
        const dnsRelativeToReq = Math.round((connectRelativeToReq + connectTimeVal) * 100) / 100;
        const receiveRelativeToReq = Math.round((dnsRelativeToReq + dnsTimeVal) * 100) / 100;
        const sendRelativeToReq = Math.round((receiveRelativeToReq + receiveTimeVal) * 100) / 100;
        const sslRelativeToReq = Math.round((sendRelativeToReq + sendTimeVal) * 100) / 100;
        const waitRelativeToReq = Math.round((sslRelativeToReq + sslTimeVal) * 100) / 100;

        return (
            <div style={[pos, elementSpacing.two, shadows.one, borderRadii.two]}>
                <div className='row'>
                    <div className='col-md-2'>+{Math.round(this.props.data.startTime)}ms</div>
                    <div className='col-md-10'>Request start time since the beginning</div>
                </div>
                <hr style={blockSpacing.one}/>
                <div style={regularTitle}>Request phases start and elapsed time relative to the request status:</div>
                <hr style={blockSpacing.one}/>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[blockTime]}></div>
                    </div>
                    <div className='col-md-1'>0ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{blockTimeVal}ms</div>
                    <div className='col-md-3'>Blocking</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[connectTime]}></div>
                    </div>
                    <div className='col-md-1'>+{connectRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{connectTimeVal}ms</div>
                    <div className='col-md-3'>Connecting</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[dnsTime]}></div>
                    </div>
                    <div className='col-md-1'>+{dnsRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{dnsTimeVal}ms</div>
                    <div className='col-md-3'>DNS Lookup</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[receiveTime]}></div>
                    </div>
                    <div className='col-md-1'>+{receiveRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{receiveTimeVal}ms</div>
                    <div className='col-md-3'>Receiving</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[sendTime]}></div>
                    </div>
                    <div className='col-md-1'>+{sendRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{sendTimeVal}ms</div>
                    <div className='col-md-3'>Sending</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[sslTime]}></div>
                    </div>
                    <div className='col-md-1'>+{sslRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{sslTimeVal}ms</div>
                    <div className='col-md-3'>SSL</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[waitTime]}></div>
                    </div>
                    <div className='col-md-1'>+{waitRelativeToReq}ms</div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>{waitTimeVal}ms</div>
                    <div className='col-md-3'>Waiting</div>
                </div>

                <hr style={blockSpacing.one}/>
                <div style={regularTitle}>Event timing relative to the request start:</div>
                <hr style={blockSpacing.one}/>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[contentLoad, {height: '15px'}]}></div>
                    </div>
                    <div className='col-md-4'>{Math.round(this.props.data.contentLoadTime - this.props.data.startTime)}ms
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>DOM Loaded</div>
                </div>
                <div className='row'>
                    <div className='col-md-1'>
                        <div style={[pageLoad, {height: '15px', left: 'none'}]}></div>
                    </div>
                    <div className='col-md-4'>{Math.round(this.props.data.totalTime - this.props.data.startTime)}ms
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>Page Loaded</div>
                </div>
            </div>
        )
    }
}