import {keyframes, styled} from '@stitches/react';

const animation = (rotate?: boolean) => {
  const rotateValue = rotate ? 'rotateZ(180deg) ' : '';
  return keyframes({
    '0%': {transform: `${rotateValue}translateY(4px)`},
    '100%': {transform: `${rotateValue}translateY(12px)`},
  });
};

export const Container = styled('section', {
  clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
  position: 'relative',
  background: 'red',
  width: '600px',
  height: '300px',
  border: 'thin solid black',
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  borderBottom: '6px solid black',

  variants: {
    side: {
      lower: {
        transform: 'rotateZ(180deg) translateY(4px)',
        animation: `${animation(true)} 1s`,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      },
      upper: {
        transform: 'translateY(4px)',
        animation: `${animation()} 1s`,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      },
    },
    open: {
        true: {
            animationIterationCount: '0'
        }
    }
  },
});

export const MiddleBall = styled('section', {
  background: 'black',
  clipPath: 'circle(50.0% at 50% 50%)',
  width: '200px',
  height: '200px',
  position: 'absolute',
  bottom: '-100px',
  display: 'grid',
  placeItems: 'center',

  variants: {
    side: {
      lower: {
        left: '198px',
      },
      upper: {
        left: '200px',
      },
    },
  },
});

export const FakeBackground = styled('div', {
  width: '80%',
  height: '80%',
  background: '#221F1F',
  backgroundImage: 'url(/src/images/arabesque.png)',
  backgroundRepeat: 'repeat',
  borderRadius: '50%',
});

export const FakeScreen = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: '#2299bc30',
  backdropFilter: 'blur( 1px )',
});
