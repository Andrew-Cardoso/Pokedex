import {styled} from '@stitches/react';
import {overflow} from '../../../global.style';

export const PokemonContainer = styled('section', {
  width: '560px',
  height: '0',
  background: '#2299bc30',
  backdropFilter: 'blur( 1px )',
  border: '1px solid rgba(255, 255, 255, 1)',
  borderTop: 'none',
  borderBottom: 'none',
  transform: 'translateY(4px)',
  transition: 'height 400ms ease-out',
  display: 'grid',
  gridTemplateAreas: '"no name" "sprite details" "sprite types" "info info"',
  gridTemplateRows: '48px 1fr 1fr 1.5fr',
  gridTemplateColumns: '1fr 1fr',
  padding: '8px',
  gap: '8px',
  fontFamily: 'system-ui',

  variants: {
    pokemonFound: {
      true: {
        height: '800px',
      },
    },
  },
});

export const NoContainer = styled('article', {
  gridArea: 'no',
  width: '100%',
  height: '100%',
  textAlign: 'left',
  fontFamily: 'system-ui',
});

export const NameContainer = styled('article', {
  gridArea: 'name',
  width: '100%',
  height: '100%',
  textAlign: 'left',
  fontFamily: 'system-ui',
});

export const Title = styled('strong', {
  fontSize: '22px',
  fontFamily: 'system-ui',
  marginRight: '8px',
  width: '100%',
  variants: {
    align: {
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    size: {
      sm: {
        fontSize: '14px',
        fontWeight: 'normal',
        textTransform: 'capitalize'
      },
      md: {
        fontSize: '18px',
      },
    },
    no: {
      true: {
        width: 'initial',
      },
    },
  },
});

export const SpriteContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  placeItems: 'center',
  gridArea: 'sprite',
  gridTemplateRows: '28px 1fr',
});

export const Sprite = styled('img', {
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '100%',
});

export const Details = styled('article', {
  gridArea: 'details',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '.5fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr 1fr',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'left',
  justifyItems: 'left',
  columnGap: '8px',
});

export const Text = styled('p', {
  margin: 0,
  padding: 0,
  fontSize: '22px',
  textTransform: 'capitalize',
  fontFamily: 'monospace',

  variants: {
    size: {
      lg: {
        fontSize: '26px',
      },
      md: {
        fontSize: '22px',
      },
      sm: {
        fontSize: '18px',
      },
    },
    bold: {
      true: {
        fontWeight: 'bold',
      },
    },
    no: {
      true: {
        width: 'initial',
        display: 'inline-block',
      },
    },
    type: {
      block: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        paddingRight: '4px',
        textAlign: 'justify',
        textTransform: 'lowercase',
        '&::first-letter': {
          textTransform: 'capitalize',
        },
        ...overflow,
      },
    },
  },
});

export const Info = styled('article', {
  gridArea: 'info',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '24px 1fr',
  rowGap: '8px',
  overflow: 'hidden',
});

export const TypesContainer = styled('article', {
  gridArea: 'types',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'wrap',
  gap: '12px',
  paddingTop: '12px',
  overflowY: 'auto',
  ...overflow,
});
