import styled from 'styled-components'
import { 
	Menu as SemanticMenu, 
	Button as SemanticButton, 
	Segment as SemanticSegment 
} from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import color from '../../static/const/color.json'

export const H1 = styled.h1`
	font-size: calc(35pt);
	color: ${color.primary1};
`

export const H3 = styled.h3`
	font-size: 26pt;
	color: ${color.primary1};
`

export const Item = styled(SemanticMenu.Item)`
	background: ${color.primary1} !important;
	color: ${color.lightPrimary} !important;
	flex-grow: 1;
	font-size: 15px;
	&:hover {
		transition-timing-function: ease-in;
		transition: 0.25s;
		background: ${color.contrast} !important;
		color: ${color.primary1} !important;
		z-index:10;
		font-weight: bold !important;
	}
	`
	
export const Menu = styled(SemanticMenu)`
	display: flex;
	justify-content:  flex-end;
	width: max-content;
`

export const MenuButton = styled(SemanticButton)`
	background: ${color.contrast} !important;
	color: ${color.primary1} !important;
	padding: 0.1rem 0.5rem 0rem 0.5rem;
	margin: 5px;
	border: 0.1rem solid ${color.primary1};
	min-width: 10vw;
	min-height: 80px !important;
`

export const Segment = styled(SemanticSegment)`
@media (min-width: 700px) {
	padding: 30px 20px 50px 20px !important;
	margin: 25px 50px 25px 50px !important;
}
`
export const Button = styled(SemanticButton)`
background: ${color.contrast} !important;
color: ${color.primary1} !important;
&:hover {
		background: ${color.lightPrimary} !important;
		color: ${color.primary1} !important;
		transition: 0.3s;
		z-index:10;
		font-weight: bold !important;
	}
`
export const LightButton = styled(SemanticButton)`
	font-size: 20pt !important;
	background: white !important;
	color: ${color.lightPrimary} !important;
	border: 0.1rem solid ${color.lightPrimary} !important;	
	&:hover {
		z-index:10;
		font-weight: bold !important;
		background: ${color.lightPrimary} !important;
		color: ${color.primary1} !important;
	}
`

export const ExitButton = styled(SemanticButton) `
	background: white !important;
	color: ${color.primary1} !important;
`

export const FloatRight = styled.div`
	float: right;
`

export const FloatLeft = styled.div`
	float: left;
`

export const SubSegment = styled(SemanticSegment) `
	margin-bottom: 1rem !important;
`

const SubImageWrap = styled.div`
width: 76px;
height: 76px;
margin: 6px 2px 0px 2px;
`

const SubImageArea = styled.div`
position: relative;
`

const SubImg = styled.img`
display: inline-block;
width:76px;
height:76px;
cursor:pointer;
position: absolute;
z-index: -1;
`

const HoveredSubImage = styled.div`
color: black;
display: none;
width: 100%;
height: 0px;
border: dashed 3pt #ccc;
z-index:1;
${SubImageWrap}:hover & {
display:block;
height: 76px;
cursor:pointer;
}
`

const HoveredSubImageText = styled.div`
position: absolute;
display: none;
z-index:1;
color: #ccc;
top: 35%;
left: 35%;
font-size: 35pt; 
${SubImageWrap}:hover & {
display:block;
height: 76px;
cursor:pointer;
}
`

const StyledDropZone = styled(Dropzone)`
width: -webkit-fill-available;
height: -webkit-fill-available;
`

export const SubImageSection = styled.div`
display: flex;
justify-content: space-between;
`


export const SubImage = ({number, setSubImage, image, preview}) =>
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

const MainImageWrap = styled.div`
max-width:400px;
max-height: 406px;
width: 100%;
`

const MainImg = styled.img`
margin: 2px;
flex-grow: 1;
cursor:pointer;
position: absolute;
z-index: -1;
width: 100%;
height: -webkit-fill-available;
`

const HoveredImage = styled.div`
display: none;
width: 100%;
height: 0px;
border: dashed 5pt #ccc;
z-index:1;
${MainImageArea}:hover & {
	display:block;
	height: -webkit-fill-available;
	cursor:pointer;
}
`

const HoveredImageText = styled.div`
display: none;
white-space: nowrap; 
color: white;
font-size: 50px;
position: absolute;
color: #ccc;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
${MainImageArea}: hover & {
	display: block;
	cursor:pointer;
}
`

export const MainImage = ({setProductImage, image}) =>
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
