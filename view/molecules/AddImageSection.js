import React from 'react'
import styled from 'styled-components'
import SquareWrapper from '../atoms/SquareWrapper'
import Image from '../atoms/Image'
import Dropzone from '../atoms/Dropzone'
// import AddImg from '../../static/img/addimg.svg'

const ImageHideWhenHovered = Image.extend`
	${Dropzone}:hover & {
		display: none;
	}
`

// const AddImage = styled(AddImg)`
// 	max-width: 100vw;
// 	max-height: -webkit-fill-available;
// 	display: ${props => props.src ? 'none' :'unset' };
// 	${Dropzone}:hover & {
// 		display:unset;
// 		background: #F2F2F2;
// 	}
// 	@media (max-width: 600px) {
// 		 max-width: ${props => props.subimg ? '20vw' : '100vw'};
// 	}
// `

export default ({src, size, subimg, setProductImage, number}) => 
<SquareWrapper maxSize={size}>
	<Dropzone size={size} onDrop={droppedImage => setProductImage(number, droppedImage)}>
			{
				src ? 
				<ImageHideWhenHovered src={src} size={size || '400px'}/>
				: null
			}{
				//<AddImage src={src} subimg={subimg || false}/>
			}
	</Dropzone>
</SquareWrapper>
