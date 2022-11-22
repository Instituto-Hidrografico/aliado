import { stitches } from "./globalStyles";

const { styled } = stitches;

export const FlexCointainer = styled('section',{
    display: "flex",
    variants: {
        direction:{
            row: {
                flexDirection: "row",
            },
            rowReverse: {
                flexDirection: "row-reverse",
            },
            column: {
                flexDirection: "column",
            },
            columnReverse: {
                flexDirection: "column-reverse",
            },
        },
    },
    // flex-wrap: nowrap | wrap | wrap-reverse,
    justifyContent: 'space-around',// flex-start | flex-end | start | end | left | center | right | space-between | space-around | space-evenly,
    alignItems: 'center',// stretch | flex-start | flex-end | center | baseline,
    alignContent: 'space-around',//flex-start | flex-end | center | space-between | space-around | stretch
    flex: 'none',
    // backgroundColor: "$letterColor",
    width: '100%',
    gap: '10px',
})
export const FlexItem = styled('article',{
    height: '3em',
    width: '3rem',
    borderRadius: '$squareBottom',
})