import { stitches } from "./globalStyles";

const { styled } = stitches;

export const Player = styled('div',{
    height: '2em',
    width: '2rem',
    borderRadius: '5rem',
    variants: {
        team:{
            one: {
                backgroundColor: '$six'
            },
            two: {
                backgroundColor: '$five'
            },
            three: {
                backgroundColor: '$four'
            },
            four: {
                backgroundColor: '$three'
            },
        },
    },
}) 