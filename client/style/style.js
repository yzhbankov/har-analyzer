//colour variables
const blue = '#05A8FA';
const orange = '#FA4E05';
const green = '#49C562';
const red = '#F74040';
const grey = '#1A2B33';

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

const colours = {
    base: {
        width: '100px',
        height: '50px',
        margin: '10px'
    },
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
    },
    paletteColours: {
        display: 'flex'
    }
};

const shadows = {
    set: {
        display: 'flex'
    },
    one: {
        boxShadow: shadowOne,
        width: '100px',
        height: '40px',
        margin: '20px'
    },
    two: {
        boxShadow: shadowTwo,
        width: '100px',
        height: '40px',
        margin: '20px'
    },
    three: {
        boxShadow: shadowOne,
        width: '100px',
        height: '160px',
        margin: '20px'
    },
    four: {
        boxShadow: shadowTwo,
        width: '200px',
        height: '400px',
        margin: '20px'
    }
};

const typeScale = {
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

const borderRadii = {
    base: {
        display: 'flex'
    },
    one: {
        width: '100px',
        height: '80px',
        margin: '10px',
        backgroundColor: grey,
        borderRadius: borderRadiiOne
    },
    two: {
        width: '100px',
        height: '80px',
        margin: '10px',
        backgroundColor: grey,
        borderRadius: borderRadiiTwo
    },
    three: {
        width: '100px',
        height: '80px',
        margin: '10px',
        backgroundColor: grey,
        borderRadius: borderRadiiThree
    }
};

const spacingScale = {
    base: {
        display: 'flex'
    },
    outer: {
        width: '100px',
        height: '200px',
        backgroundColor: '#BCFCFF',
        zIndex: 0,
        marginRight: '20px'
    },
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

const letterSpacing = {
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