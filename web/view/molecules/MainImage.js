import MainImageWrap from '../atoms/MainImageWrap'
import MainImageArea from '../atoms/MainImageArea'
import MainImg from '../atoms/MainImg'
import HoveredImage from '../molecules/HoveredImage'
import HoveredImageText from '../molecules/HoveredImageText'
import Dropzone from '../atoms/Dropzone'

export default ({setProductImage, image}) =>
<MainImageWrap>
	<Dropzone onDrop={droppedImage => setProductImage(0, droppedImage)}>
		<MainImageArea>
			<MainImg src={image || '/static/img/noimg.png'} title="add main image"/>
				<HoveredImage>
					<HoveredImageText>add image</HoveredImageText>
				</HoveredImage>
		</MainImageArea>
	</Dropzone>
</MainImageWrap>
