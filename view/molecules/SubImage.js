

export default ({number, setSubImage, image, preview}) =>
<SubImageWrap>
		<SubImageArea>
			<SubImg src={image||'/static/img/noimg.png'} title="add sub image 1"/>
			{
				preview? 
				null:
				<HoveredSubImage>
					<StyledDropZone onDrop={droppedImage => setSubImage(number,droppedImage)}>
						<HoveredSubImageText>+</HoveredSubImageText>
					</StyledDropZone>
				</HoveredSubImage>
			}
		</SubImageArea>
</SubImageWrap>
