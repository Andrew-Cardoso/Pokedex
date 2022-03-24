import {styled} from '@stitches/react';
import { overflow } from '../../../global.style';

export const AutocompleteContainer = styled('article', {
	position: 'absolute',
	background: 'transparent',
	width: '432px',
	top: '60px',
	left: '-36px',
	zIndex: '9',
	display: 'flex',
	flexDirection: 'column',
	height: 0,
	overflowX: 'hidden',
	overflowY: 'auto',
	transition: 'height 200ms ease',
	alignItems: 'center',
	alignContent: 'center',
	...overflow,

	variants: {
		show: {
			true: {
				height: '50vh',

				'&::before': {
					content: '',
					display: 'block',
					position: 'sticky',
					top: '0',
					margin: '0 auto',
					width: '360px',
					borderTop: '1px solid rgba(255, 255, 255, 1)',
					zIndex: 1,
				},

				'&::after': {
					content: '',
					display: 'block',
					position: 'sticky',
					bottom: '0',
					margin: '0 auto',
					width: '360px',
					borderBottom: '1px solid rgba(255, 255, 255, 1)',
					zIndex: 1,
				},
			},
			false: {
				height: 0,
			}
		},
	},
});

export const AutocompleteItem = styled('section', {
	color: 'white',
	width: '360px',
	fontFamily: 'system-ui',
	fontSize: '20px',
	textTransform: 'capitalize',
	padding: '8px 12px',
	background: '#2299bc30',
	backdropFilter: 'blur( 1px )',
	borderLeft: '1px solid rgba(255, 255, 255, 1)',
	borderRight: '1px solid rgba(255, 255, 255, 1)',
	transition: 'all 300ms ease-out',
	cursor: 'pointer',

	'&:hover': {
		backgroundColor: 'red',
		width: '396px',
		fontSize: '22px',
		padding: '10px 14px',
		border: '1px solid rgba(255, 255, 255, 1) !important',
		zIndex: 2,
		marginTop: '-1px',
	},
});
