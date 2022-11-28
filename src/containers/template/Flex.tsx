import { stitches } from "../globalStyles";

const { styled } = stitches;

export const FlexCointainer = styled('section',{
    height: '100vh',
    width: '100%',
    display: "flex",
    justifyContent: 'start',
    // justifyContent: 'space-around',// flex-start | flex-end | start | end | left | center | right | space-between | space-around | space-evenly,
    // alignContent: 'space-around',//flex-start | flex-end | center | space-between | space-around | stretch
    flex: 'none',
    flexWrap: 'nowrap',
    variants: {
        element:{
            all: {
                flexDirection: "row",
                
                color: '$six',
                backgroundColor: '$letterColor'
            },
            sidebar: {
                width: '20%',
                flexDirection: "column",
                gap: '1em',
                '@media (min-width: 400px)': {
                    backgroundColor: 'red',
                },

                color: '$five',
                backgroundColor: '$one',
            },
            main: {
                width: '80%',
                flexDirection: "column",

                color: '$four',
                backgroundColor: '$three'
            },
            content: {
                height: '88vh',
                flexDirection: "row",
                alignItems: 'center',

                color: '$three',
                backgroundColor: '$four'
            },
            nav: {
                height: '6vh',
                flexDirection: "row",
                justifyContent: 'space-between',
                
                color: '$two',
                backgroundColor: '$five'
            },
        },
    },
})
export const FlexItem = styled('article',{
    height: '3vh',
    width: '3vw',
    borderRadius: '5px',
    '&:hover': {
        color: 'red',
        backgroundColor: '$two',
    }
})