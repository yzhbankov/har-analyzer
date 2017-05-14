import React, {Component} from 'react'
import Radium from 'radium'
import {regularTitle, dnsTime, connectTime, sslTime, blockTime, sendTime, waitTime, contentLoad, pageLoad, receiveTime} from '../style/components.js'

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
            <div style={pos}>
                <div className='columns'>
                    <div className='column is-2 is-vertical-spaceless'>+{Math.round(this.props.data.startTime)}ms</div>
                    <div className='column is-10 is-vertical-spaceless'>Request start time since the beginning</div>
                </div>
                <hr/>
                <div className="has-text-bold is-vertical-spaceless">Request phases start and elapsed time relative to the request status:</div>
                <hr/>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="blockTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>0ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{blockTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>Blocking</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="dnsTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{dnsRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{dnsTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>DNS Lookup</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="connectTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{connectRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{connectTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>Connecting</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="sslTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{sslRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{sslTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>SSL</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="sendTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{sendRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{sendTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>Sending</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="waitTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{waitRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{waitTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>Waiting</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="receiveTime"></div>
                    </div>
                    <div className='column is-1 is-vertical-spaceless'>+{receiveRelativeToReq}ms</div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-5 is-vertical-spaceless'>{receiveTimeVal}ms</div>
                    <div className='column is-3 is-vertical-spaceless'>Receiving</div>
                </div>
                <hr/>
                <div className="has-text-bold">Event timing relative to the request start:</div>
                <hr/>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="contentLoad"></div>
                    </div>
                    <div className='column is- is-vertical-spaceless4'>{Math.round(this.props.data.contentLoadTime - this.props.data.startTime)}ms
                    </div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-3 is-vertical-spaceless'>DOM Loaded</div>
                </div>
                <div className='columns'>
                    <div className='column is-1 is-vertical-spaceless'>
                        <div className="pageLoad"></div>
                    </div>
                    <div className='column is-4 is-vertical-spaceless'>{Math.round(this.props.data.totalTime - this.props.data.startTime)}ms
                    </div>
                    <div className='column is-1 is-vertical-spaceless'></div>
                    <div className='column is-3 is-vertical-spaceless'>Page Loaded</div>
                </div>
            </div>
        )
    }
}