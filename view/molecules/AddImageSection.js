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
	src: props=> props.src || ''
})`
	
	display: ${props => props.src ? 'none' :'unset' };
	${Dropzone}:hover & {
		display:unset;
	}
`

export default ({src, size}) => 
<SquareWrapper maxSize={size}>
	<Dropzone size={size} >
			{
				src ? 
				<ImageHideWhenHovered src={src} size={size || '400px'}/>
				: null
			}
				<AddImage src={src} style={{width: "100%", height: "100%"}}/>
	</Dropzone>
</SquareWrapper>
