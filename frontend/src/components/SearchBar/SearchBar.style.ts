import {styled} from '@stitches/react';

export const Section = styled('section', {
	backgroundColor: 'transparent',
	display: 'grid',
	gridTemplateColumns: '360px 56px',
	placeItems: 'center',
	position: 'relative',
});

export const Input = styled('input', {
	backgroundColor: 'transparent',
	border: 'thin solid #FFCCCB',
	height: '48px',
	width: '100%',
	borderRadius: '28px',
	padding: '0 32px 0 8px',
	borderRight: 'none',
	color: '#FFCCCB',
	fontSize: '16px',
	textTransform: 'capitalize',
});

export const Button = styled('button', {
	background: 'transparent',
	border: 'none',
	outline: 'none',
	width: '56px',
	height: '56px',
	transform: 'translateX(-48px)',
	'&:hover': {
		backgroundColor: 'transparent',
		border: 'none',
		outline: 'none',
	},
	'&:focus': {
		backgroundColor: 'transparent',
		border: 'none',
		outline: 'none',
	},
});

export const Image = styled('img', {
	width: '100%',
	height: '100%',
});
