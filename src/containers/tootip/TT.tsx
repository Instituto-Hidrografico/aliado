import { stitches } from '../globalStyles'

const { styled } = stitches

export const Tooltip2 = styled('div',{
    position: 'relative',
    display: 'inline-block',
    borderBottom: '1px dotted black',

    visibility: 'hidden',
    width: '120px',
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px 0',
    // position: 'absolute',
    zIndex: '1',
    '&:hover': {
        visibility: 'visible',
    },
})

export const TooltipText = styled('span',{
    visibility: 'hidden',
    width: '120px',
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '6px',
    padding: '5px 0',
    position: 'absolute',
    zIndex: '1',
    '&:hover': {
        visibility: 'visible',
    },
})