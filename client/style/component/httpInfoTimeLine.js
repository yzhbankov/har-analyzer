import '../../style/style'

export const httpInfoTimeLine = {
    timeLine: {
        position: 'relative',
        float: 'left',
        display: 'flex',
        height: '15px',
        width: '100%',
    },
    dnsTime: {
        backgroundColor: '#00bfff',
        height: '15px',
    },
    connectTime: {
        backgroundColor: '#40ff00',
        height: '15px',
    },
    blockTime: {
        backgroundColor: '#ffbf00',
        height: '15px',
    },
    sendTime: {
        backgroundColor: '#ff0000',
        height: '15px',
    },
    waitTime: {
        backgroundColor: '#bf00ff',
        height: '15px',
    },
    receiveTime: {
        backgroundColor: '#ebebe0',
        height: '15px',
    },
    contentLoad: {
        position: 'absolute',
        width: '1px',
        height: '110%',
        background: '#1c80bd',
        top: '-5%'
    },
    pageLoad: {
        position: 'absolute',
        width: '1px',
        height: '110%',
        background: '#ff0024',
        top: '-5%',
        left: '100%'
    }
}