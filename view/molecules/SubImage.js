import Dropzone from '../atoms/Dropzone'
import SubImageArea from '../'

export default ({number, setSubImage, image, preview}) =>
<SubImageWrap>
		<SubImageArea>
			<SubImg src={image||'/static/img/noimg.png'} title="add sub image 1"/>
			{
				preview? 
				null:
				<HoveredSubImage>
					<DropZone onDrop={droppedImage => setSubImage(number,droppedImage)}>
						<HoveredSubImageText>+</HoveredSubImageText>
					</DropZone>
				</HoveredSubImage>
			}
		</SubImageArea>
</SubImageWrap>
