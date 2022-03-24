import {styled} from '@stitches/react';

export const Type = styled('div', {
  padding: '2px 8px 6px 8px',
  fontSize: '18px',
  fontFamily: 'system-ui',
  fontVariant: 'all-small-caps',
  width: 'fit-content',
  height: 'fit-content',
  display: 'grid',
  placeItems: 'center',
  placeContent: 'center',
  borderRadius: '16px',
  variants: {
    type: {
      normal: {
        backgroundColor: '#545436',
      },
      fighting: {
        backgroundColor: '#9a2620',
      },
      flying: {
        backgroundColor: '#270f70',
      },
      poison: {
        backgroundColor: '#803380',
      },
      ground: {
        backgroundColor: '#644f14',
      },
      rock: {
        backgroundColor: '#93802d',
      },
      bug: {
        backgroundColor: '#86931a',
      },
      ghost: {
        backgroundColor: '#5a467a',
      },
      steel: {
        backgroundColor: '#313149',
      },
      fire: {
        backgroundColor: '#ac4f0c',
      },
      water: {
        backgroundColor: '#0e3289',
      },
      grass: {
        backgroundColor: '#5f902d',
      },
      electric: {
        backgroundColor: '#826904',
      },
      psychic: {
        backgroundColor: '#950631',
      },
      ice: {
        backgroundColor: '#256363',
      },
      dragon: {
        backgroundColor: '#3506a9',
      },
      dark: {
        backgroundColor: '#5a463a',
      },
      fairy: {
        backgroundColor: '#561219',
      },
    },
  },
});
