import React from 'react'
import styled from 'styled-components'
import SquareWrapper from '../../view/atoms/SquareWrapper'
import Image from '../../view/atoms/Image'
import Dropzone from '../../view/atoms/Dropzone'
import AddImg from '../../static/img/addimg.svg'

export default ({src, size}) => 
<SquareWrapper maxSize={size}>
	<Dropzone size={size} >
			{
				src ? 
				<Image src={src} size={size || '400px'}/>
				:
				<AddImg style={{width: "100%", height: "100%"}}/>
			}
	</Dropzone>
</SquareWrapper>
