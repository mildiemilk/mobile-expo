import React from 'react'
import styled from 'styled-components'
import SquareWrapper from '../../view/atoms/SquareWrapper'
import Image from '../../view/atoms/Image'
import Dropzone from '../../view/atoms/Dropzone'
import AddImg from '../../static/img/addimg.svg'

const ImageHideWhenHovered = Image.extend`
	${Dropzone}:hover & {
		display: none;
	}
`

const AddImage = styled(AddImg).attrs({
	src: props=> props.src || '',
	subimg: props => props.subimg || false
})`
	max-width: 100vw;
	max-height: -webkit-fill-available;
	display: ${props => props.src ? 'none' :'unset' };
	${Dropzone}:hover & {
		display:unset;
		background: #F2F2F2;
	}
	@media (max-width: 600px) {
		 max-width: ${props => props.subimg ? '20vw' : '100vw'};
	}
`

export default ({src, size, subimg}) => <SquareWrapper maxSize={size}>
	<Dropzone size={size} >
			{
				src ? 
				<ImageHideWhenHovered src={src} size={size || '400px'}/>
				: null
			}
				<AddImage src={src} subimg={subimg || false}/>
	</Dropzone>
</SquareWrapper>
