import styled, { css } from 'styled-components';
import FileIconNormal from './FileIconNormal';

const FileIconOutline = styled(FileIconNormal)`
	width: 96px;
	height: 136px;
	background: none;
	border: 3px solid ${props => props.colorScheme.primary};
	
	${props => props.smallest && css`
		width: 31px;
		height: 42px;
		border-radius: 4px;
		font-size: 9px;
	`}
	
	${props => props.small && css`
		width: 46px;
		height: 66px;
		font-size: 11px;
	`}

	${props => props.medium && css`
		width: 71px;
		height: 101px;
		font-size: 16px;
	`}
	
	&:before {
		top: -3px;
		right: -3px;
		border-color: ${props => props.background + ' ' + props.background + ' '
			+ props.colorScheme.primary} ${props => props.colorScheme.secondary};
		border-width: 18px;
		
		${props => props.smallest && css`
			border-width: 7px;
			border-bottom-left-radius: 4px;
		`}
		
		${props => props.small && css`
			border-width: 10px;
			border-bottom-left-radius: 6px;
		`}
	
		${props => props.medium && css`
			border-width: 14px;
			border-bottom-left-radius: 8px;
		`}
	}
	
	&:after {
		bottom: 8px;
		left: 8px;
		color: ${props => props.colorScheme.secondary}
		
		${props => props.smallest && css`
			left: 4px;
			bottom: 4px;
		`}

		${props => props.small && css`
			left: 7px;
			bottom: 7px;
		`}
	}
`;

export default FileIconOutline;
