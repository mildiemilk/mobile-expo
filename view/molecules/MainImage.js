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
