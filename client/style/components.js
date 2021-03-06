import {colours, shadows, borderRadii, fontSize, textColor, blockSpacing, elementSpacing, blockWidth, blockHeight} from './style.js'

//buttons
export const defaultButton = [colours.default, borderRadii.two, fontSize.h5, textColor.muted, blockSpacing.two, elementSpacing.two, {borderStyle: 'solid', borderWidth: '1px'}];
export const primaryButton = [colours.primary, borderRadii.two, fontSize.h5, textColor.white, blockSpacing.two, elementSpacing.two, {border: 'none'}];
export const successButton = [colours.success, borderRadii.two, fontSize.h5, textColor.white, blockSpacing.two, elementSpacing.two, {border: 'none'}];
export const dangerButton = [colours.danger, borderRadii.two, fontSize.h5, textColor.white, blockSpacing.two, elementSpacing.two, {border: 'none'}];

//text
export const primaryTitle = [fontSize.h2, {textAlign: 'center', fontWeight: 'bold'}];
export const chapterTitle = [fontSize.h5, {textAlign: 'center', fontWeight: 'bold'}];
export const regularTitle = [fontSize.h6, {textAlign: 'center', fontWeight: 'bold'}];
export const regularText = [fontSize.h7, {fontFamily: 'Mada'}];

//block width
export const xxSmallBlock = [blockWidth.xxSmall];
export const xSmallBlock = [blockWidth.xSmall];
export const smallBlock = [blockWidth.small];
export const medeumBlock = [blockWidth.medeum];
export const xMedeumBlock = [blockWidth.xMedeum];
export const xxMedeumBlock = [blockWidth.xxMedeum];
export const largeBlock = [blockWidth.large];
export const xLargeBlock = [blockWidth.xLarge];
export const xxLargeBlock = [blockWidth.xxLarge];

//time line
export const timeLine = {position: 'relative', float: 'left', display: 'flex', height: '15px', width: '100%'};
export const startTime = {borderRight: '1px solid black'};
export const dnsTime = {backgroundColor: '#FFCE56', height: '15px'};
export const connectTime = {backgroundColor: '#4BC0C0', height: '15px'};
export const receiveTime = {backgroundColor: '#3ce200', height: '15px'};
export const blockTime = {backgroundColor: '#ff0024', height: '15px'};
export const sendTime = {backgroundColor: '#36A2EB', height: '15px'};
export const waitTime = {backgroundColor: '#bf00ff', height: '15px'};
export const sslTime = {backgroundColor: '#f46133', height: '15px'};

export const contentLoad = {position: 'absolute', width: '1px', height: '115%', background: '#1c80bd', top: '-5%'};
export const pageLoad = {position: 'absolute', width: '1px', height: '115%', background: '#ff0024', top: '-5%'};

//block content
export const smallBlockContent = [blockWidth.small, blockHeight.small];
export const medeumBlockContent = [blockWidth.xLarge, blockHeight.large, {overflowX: 'hidden', overflowY: 'auto'}];

//details title
export const httpInfoDetails = {
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderColor: 'ghostwhite',
    borderWidth: '1px',
    borderRadius: '10px'
};
export const cookies = {height: '600px', overflowX: 'hidden', overflowY: 'auto'};

//align
export const center = {textAlign: 'center'};
export const left = {textAlign: 'left'};
export const right = {textAlign: 'right'};

