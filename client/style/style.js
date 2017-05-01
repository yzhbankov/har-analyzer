//colour variables
const blue = '#05A8FA';
const orange = '#FA4E05';
const green = '#49C562';
const red = '#F74040';
const grey = '#1A2B33';

//font colour
const textMuted = '#636c72';
const textPrimary = '#0275d8';
const textSuccess = '#5cb85c';
const textInfo = '#5bc0de';
const textWarning = '#5bc0de';
const textDanger = '#d9534f';
const textWhite = '#fff';

//shadow variables
const shadowOne = '0px 3px 15px rgba(0, 0, 0, 0.2)';
const shadowTwo = '0px 6px 30px rgba(0, 0, 0, 0.2)';

//type scale variables
const typeScaleOne = '6em';
const typeScaleTwo = '3em';
const typeScaleThree = '2.4em';
const typeScaleFour = '1.6em';
const typeScaleFive = '1.25em';
const typeScaleSix = '1em';
const typeScaleSeven = '0.8em';

//border radius
const borderRadiiOne = '2px';
const borderRadiiTwo = '4px';
const borderRadiiThree = '8px';

//spacing scale
const spacingScaleOne = 8;
const spacingScaleTwo = 16;
const spacingScaleThree = 24;
const spacingScaleFour = 32;
const spacingScaleFive = 40;
const spacingScaleSix = 48;
const spacingScaleSeven = 64;

//letter spacing
const letterSpacingOne = '-2px';
const letterSpacingTwo = '-1px';
const letterSpacingThree = '-0.5px';
const letterSpacingFour = '1px';

export const colours = {
    blue: {
        backgroundColor: blue
    },
    orange: {
        backgroundColor: orange
    },
    red: {
        backgroundColor: red
    },
    green: {
        backgroundColor: green
    },
    gray: {
        backgroundColor: grey
    }
};

export const shadows = {
    one: {
        boxShadow: shadowOne
    },
    two: {
        boxShadow: shadowTwo
    },
    three: {
        boxShadow: shadowOne
    },
    four: {
        boxShadow: shadowTwo
    }
};

export const typeScale = {
    one: {
        fontSize: typeScaleOne
    },
    two: {
        fontSize: typeScaleTwo
    },
    three: {
        fontSize: typeScaleThree
    },
    four: {
        fontSize: typeScaleFour
    },
    five: {
        fontSize: typeScaleFive
    },
    six: {
        fontSize: typeScaleSix
    },
    seven: {
        fontSize: typeScaleSeven
    }
};

export const borderRadii = {
    one: {
        borderRadius: borderRadiiOne
    },
    two: {
        borderRadius: borderRadiiTwo
    },
    three: {
        borderRadius: borderRadiiThree
    }
};

export const spacingScale = {
    one: {
        marginTop: spacingScaleOne,
        height: 200 - 2 * spacingScaleOne + 'px',
        backgroundColor: blue
    },
    two: {
        marginTop: spacingScaleTwo,
        height: 200 - 2 * spacingScaleTwo + 'px',
        backgroundColor: blue
    },
    three: {
        marginTop: spacingScaleThree,
        height: 200 - 2 * spacingScaleThree + 'px',
        backgroundColor: blue
    },
    four: {
        marginTop: spacingScaleFour,
        height: 200 - 2 * spacingScaleFour + 'px',
        backgroundColor: blue
    },
    five: {
        marginTop: spacingScaleFive,
        height: 200 - 2 * spacingScaleFive + 'px',
        backgroundColor: blue
    },
    six: {
        marginTop: spacingScaleSix,
        height: 200 - 2 * spacingScaleSix + 'px',
        backgroundColor: blue
    },
    seven: {
        marginTop: spacingScaleSeven,
        height: 200 - 2 * spacingScaleSeven + 'px',
        backgroundColor: blue
    }
};

export const letterSpacing = {
    base: {
        display: 'flex'
    },
    one: {
        fontSize: '60px',
        marginRight: '20px',
        letterSpacing: letterSpacingOne
    },
    two: {
        fontSize: '60px',
        marginRight: '20px',
        letterSpacing: letterSpacingTwo
    },
    three: {
        fontSize: '60px',
        marginRight: '20px',
        letterSpacing: letterSpacingThree
    },
    four: {
        fontSize: '60px',
        marginRight: '20px',
        letterSpacing: letterSpacingFour
    }
};

export const textColor = {
    muted: {
        color: textMuted
    },
    primary: {
        color: textPrimary
    },
    success: {
        color: textSuccess
    },
    info: {
        color: textInfo
    },
    warning: {
        color: textWarning
    },
    danger: {
        color: textDanger
    },
    white: {
        color: textWhite
    }
}

export const spacing = {
    one:{
        marginTop: spacingScaleOne,
        marginBottom: spacingScaleOne
    },
    two:{
        marginTop: spacingScaleTwo,
        marginBottom: spacingScaleTwo
    },
    three:{
        marginTop: spacingScaleThree,
        marginBottom: spacingScaleThree
    },
    four:{
        marginTop: spacingScaleFour,
        marginBottom: spacingScaleFour
    },
    five:{
        marginTop: spacingScaleFive,
        marginBottom: spacingScaleFive
    }
}