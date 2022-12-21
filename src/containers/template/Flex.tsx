import { stitches } from "../globalStyles";

const { styled } = stitches;

export const FlexCointainer = styled('div',{
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    overflow: 'hidden',
    variants: {
        sidehide: {
            true: {
                '@media screen and (max-width: 900px)': {
                    display: 'none',
                },
            },
            false: {
                width: '5%',
                'div > p': {
                    display: 'none',
                },
                // 'div > div': {
                //     display: 'none',
                // },
                '@media screen and (max-width: 900px)': {
                    display: 'none',
                },
            },
        },
        mainhide: {
            false: {
                width: '95%',
                'div > p': {
                    display: 'none',
                },
                '@media screen and (max-width: 900px)': {
                    width: '100%',
                },
            },
        },
        element:{
            all: {
                alignItems: 'stretch',
                backgroundColor: 'LightGray',
            },
            sidebar: {
                height: '100vh',
                width: '256px',
                // flexDirection: 'column',
                // backgroundPosition: '50%',
                padding: '1em',
                margin: '.5em .0em 0em .5em',
                borderRadius: '5px 5px 0px 0px',
                // justifyContent: 'center',
                // alignItems: 'center',
                color: '$five1',
                backgroundColor: '$one1',
                backgroundImage: 'linear-gradient(to bottom, $one1, $three1)',
            },
            main: {
                flexBasis: '0',
                flexGrow: '1.5',
                flexDirection: "column",

                color: '$four1',
                backgroundColor: '$three1'
            },
            content: {
                height: '94vh',
                flexDirection: "row",
                
                color: '$three1',
                backgroundColor: '$four1'
            },
            nav: {
                height: '6vh',
                backgroundPosition: '50%',
                padding: '.5rem',
                flexDirection: "row",
                justifyContent: 'space-between',
                
                color: '$two1',
                backgroundColor: '$five1'
            },
        },
    },
})
export const FlexItem = styled('div',{
    height: '3vh',
    width: '3vw',
    userSelect: 'none',
    borderRadius: '5px',
    float: 'right',
    transition: '.5s',
    '&:hover': {
        color: '$five1',
        backgroundColor: '$three1',
    },
    p : {
        display: 'inline',
    },
    variants: {
        element: {
            sideitem: {
                height: '5vh',
                width: '100%',
                padding: '.5em',
                textTransform: 'capitalize',
            }
        },
    },
})

export const Sidebar = styled('aside',{
    width: '256px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    padding: '1em',
    margin: '.5em .5em 0em .5em',
    borderRadius: '5px 5px 0px 0px',
    color: '$five1',
    backgroundColor: '$one1',
    backgroundImage: 'linear-gradient(to bottom, $one1, $three1)',
    variants: {
        sidehide: {
            true: {
                '@media screen and (max-width: 900px)': {
                    display: 'none',
                },
            },
            false: {
                width: '5%',
                'div > p': {
                    display: 'none',
                },
                '@media screen and (max-width: 900px)': {
                    display: 'none',
                },
            },
        },
    },
})