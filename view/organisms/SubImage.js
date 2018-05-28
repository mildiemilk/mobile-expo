import Dropzone from '../atoms/Dropzone'
import SubImageSection from '../atoms/SubImageSection'
import SubImageWrap from '../atoms/SubImageWrap'
import SubImg from '../atoms/SubImg'
import HoveredSubImage from '../molecules/HoveredSubImage'
import HoveredSubImageText from '../molecules/HoveredSubImageText'

export default ({number, setSubImage, image, preview}) =>
<SubImageWrap>
		<SubImageSection>
			<SubImg src={image.split('.jpg').join('_s.jpg') ||'/static/img/noimg.png'} title="add sub image 1"/>
			{
				preview? 
				null:
				<HoveredSubImage>
					<Dropzone onDrop={droppedImage => setSubImage(number,droppedImage)}>
						<HoveredSubImageText>+</HoveredSubImageText>
					</Dropzone>
				</HoveredSubImage>
			}
		</SubImageSection>
</SubImageWrap>
