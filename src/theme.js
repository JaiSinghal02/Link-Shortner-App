//theme colors
const colors= {
    Primary:{
        'Cyan': '#2acfcf',
        'Dark Violet': '#3b3054'
    },
    Secondary:{
        'Red': '#f46262'
    },
    Neutral:{
        'Gray': '#bfbfbf',
        'Grayish Violet': '#9e9aa7',
        'Very Dark Blue': '#35323e',
        'Very Dark Violet': '#232127',
    }
}

//theme font style
const typography={
    'Body Copy':{
        'Font size': '18px'
    },
    'Fonts':{
        'Family': `'Poppins', sans-serif`,
        'Weights': ['500','700']
    }

}
const breakpoints = ['375px', '1440px']
breakpoints.mobile = breakpoints[0]
const theme = {colors,typography,breakpoints}
export default theme