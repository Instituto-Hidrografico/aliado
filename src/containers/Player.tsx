import { stitches } from "./globalStyles";

const { styled } = stitches;

export const Player = styled('div',{
    height: '2em',
    width: '2rem',
    borderRadius: '5rem',
    boxShadow: '0 .3rem .6rem rgba(0,0,0,0.16), 0 .3rem .6rem rgba(0,0,0,0.23), 0 0 .25rem #AAA inset',
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