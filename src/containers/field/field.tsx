import { stitches } from "../globalStyles";

const { styled } = stitches;

export const Field = styled('div',{
    height: '3em',
    width: '3rem',
    borderRadius: '.25rem',
    variants: {
        position:{
            one: {
                color: '$one',
                backgroundColor: '$six'
            },
            two: {
                color: '$two',
                backgroundColor: '$five'
            },
            three: {
                color: '$three',
                backgroundColor: '$four'
            },
            four: {
                color: '$four',
                backgroundColor: '$three'
            },
            five: {
                color: '$five',
                backgroundColor: '$two'
            },
            six: {
                color: '$six',
                backgroundColor: '$one'
            },
        },
    },
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}) 