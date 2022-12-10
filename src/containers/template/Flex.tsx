import { stitches } from "../globalStyles";

const { styled } = stitches;

export const FlexCointainer = styled('div',{
    height: '100vh',
    width: '100%',
    display: "flex",
    justifyContent: 'start',
    alignItems: 'center',
    flex: 'none',
    flexWrap: 'nowrap',
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
                flexDirection: "row",
                
                color: '$six1',
                backgroundColor: '$letterColor'
            },
            sidebar: {
                width: '20%',
                flexDirection: "column",
                backgroundPosition: '50%',
                padding: '1em',
                alignItems: 'baseline',
                color: '$five1',
                backgroundColor: '$one1',
                backgroundImage: 'linear-gradient(to bottom, $one1, $three1)',
            },
            main: {
                width: '80%',
                flexDirection: "column",

                color: '$four1',
                backgroundColor: '$three1'
            },
            content: {
                height: '88vh',
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
        float: {
            left: {
                float: 'left',
            },
            right: {
                float: 'right',
            },
        }
    },
})