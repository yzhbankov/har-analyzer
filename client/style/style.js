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
const typeScaleSeven = '0.9em';

//border radius
const borderRadiiOne = '2px';
const borderRadiiTwo = '4px';
const borderRadiiThree = '8px';

//spacing scale
const spacingScaleOne = '4px';
const spacingScaleTwo = '8px';
const spacingScaleThree = '12px';
const spacingScaleFour = '16px';
const spacingScaleFive = '20px';
const spacingScaleSix = '24px';
const spacingScaleSeven = '32px';

//letter spacing
const letterSpacingOne = '-2px';
const letterSpacingTwo = '-1px';
const letterSpacingThree = '-0.5px';
const letterSpacingFour = '1px';

//widths
const xxSmall = '30px';
const xSmall = '60px';
const small = '100px';
const medeum = '120px';
const xMedeum = '240px';
const xxmedeum = '480px';
const large = '600px';
const xLarge = '1000px';
const xxLarge = '2000px';

export const colours = {
    primary: {
        backgroundColor: blue
    },
    warning: {
        backgroundColor: orange
    },
    danger: {
        backgroundColor: red
    },
    success: {
        backgroundColor: green
    },
    default: {
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

export const fontSize = {
    h1: {
        fontSize: typeScaleOne
    },
    h2: {
        fontSize: typeScaleTwo
    },
    h3: {
        fontSize: typeScaleThree
    },
    h4: {
        fontSize: typeScaleFour
    },
    h5: {
        fontSize: typeScaleFive
    },
    h6: {
        fontSize: typeScaleSix
    },
    h7: {
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

export const elementSpacing = {
    one: {
        padding: spacingScaleOne
    },
    two: {
        padding: spacingScaleTwo
    },
    three: {
        padding: spacingScaleThree
    },
    four: {
        padding: spacingScaleFour
    },
    five: {
        padding: spacingScaleFive
    },
    six: {
        padding: spacingScaleSix
    },
    seven: {
        padding: spacingScaleSeven
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

export const blockSpacing = {
    one: {
        marginTop: spacingScaleOne,
        marginBottom: spacingScaleOne
    },
    two: {
        marginTop: spacingScaleTwo,
        marginBottom: spacingScaleTwo
    },
    three: {
        marginTop: spacingScaleThree,
        marginBottom: spacingScaleThree
    },
    four: {
        marginTop: spacingScaleFour,
        marginBottom: spacingScaleFour
    },
    five: {
        marginTop: spacingScaleFive,
        marginBottom: spacingScaleFive
    }
}

export const blockWidth = {
    xxSmall: {
        width: xxSmall
    },
    xSmall: {
        width: xSmall
    },
    small: {
        width: small
    },
    medeum: {
        width: medeum
    },
    xMedeum: {
        width: xMedeum
    },
    xxMedeum: {
        width: xxmedeum
    },
    large: {
        width: large
    },
    xLarge: {
        width: xLarge
    },
    xxLarge: {
        width: xxLarge
    }
}