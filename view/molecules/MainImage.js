import MainImageWrap from '../atoms/MainImageWrap'
import MainImageArea from '../atoms/MainImageArea'
import MainImg from '../atoms/MainImg'
import HoveredImage from '../atoms/HoveredImage'
import HoveredImageText from '../atoms/HoveredImageText'

export default ({setProductImage, image}) =>
<MainImageWrap>
	<StyledDropZone onDrop={droppedImage => setProductImage(0, droppedImage)}>
		<MainImageArea>
			<MainImg src={image || '/static/img/noimg.png'} title="add main image"/>
				<HoveredImage>
					<HoveredImageText>add image</HoveredImageText>
				</HoveredImage>
		</MainImageArea>
	</StyledDropZone>
</MainImageWrap>
