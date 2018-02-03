import React from 'react'
import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import ImageDisplay from '../molecules/ImageDisplay'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'
import DisplaySubImage from '../molecules/DisplaySubImage'
import Flex from '../atoms/Flex'

class DisplayImages extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			imageIndex: 0
		}
    }

    handleImageDisplay = (imageIndex) => this.setState({ imageIndex })

    render() {
        const { images = [] } = this.props
        const { imageIndex } = this.state
        return (<Wrapper>
            <ImageDisplay src={images[imageIndex]} size={'275px'}/>
            <SubImageWrapper>
            <Flex width="100%" justContent="center" direction="row" margin="25px 0px">
                {images.slice(1).map((image, index) => <DisplaySubImage 
                    onMouseOver={() => this.handleImageDisplay(index+1)}
                    onMouseLeave={() => this.handleImageDisplay(0)}
                    src={image} 
                    size="100px" 
                    subimg />)}
            </Flex>
            </SubImageWrapper>
        </Wrapper>)
    }
}

export default DisplayImages


