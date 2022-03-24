import { keyframes, styled } from "@stitches/react";

const spin = keyframes({
    '0%': { transform: 'rotateZ(20deg)' },
    '20%': { transform: 'rotateZ(-20deg)' },
    '50%': { transform: 'rotateZ(380deg)' },
    '80%': { transform: 'rotateZ(-20deg)' },
    '100%': { transform: 'rotateZ(20deg)' },
  });

export const Spinner = styled('img', {    
    width: '190px',
    position: 'absolute',
    zIndex: '2',
    marginTop: '-4px',
    marginRight: '-1px',
    transition: 'width 200ms ease',

    variants: {
        isLoading: {
            true: {
                animation: `${spin} 1000ms`,
                animationIterationCount: 'infinite',
            }
        },
        pokemonFound: {
            true: {
                width: '0'
            }
        }
    }
})