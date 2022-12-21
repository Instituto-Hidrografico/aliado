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
        element:{
            all: {
                alignItems: 'stretch',
                backgroundColor: '$back',
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
export const SideItem = styled('div',{
    height: '$xss',
    width: '$xss',
    userSelect: 'none',
    borderRadius: '5px',
    padding: '.5em',
    textTransform: 'capitalize',
    transition: '.5s',
    '&:hover': {
        color: '$five1',
        backgroundColor: '$three1',
    },
    p : {
        display: 'inline',
    },
})

export const Sidebar = styled('aside',{
    width: '256px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    padding: '$xxs',
    margin: '$xxs',
    borderRadius: '.3rem',
    color: '$five1',
    backgroundColor: '$one1',
    backgroundImage: 'linear-gradient(to bottom, $one1, $three1)',
    variants: {
        sidehide: {
            true: {
                '@bp4': {
                    display: 'none',
                },
            },
            false: {
                width: '2.9rem',
                'div > p': {
                    display: 'none',
                },
                '@bp4': {
                    display: 'none',
                },
            },
        },
    },
})