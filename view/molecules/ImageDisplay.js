import Image from '../atoms/Image'
import SquareWrapper from '../atoms/SquareWrapper'

export default ({src, size, subImg, onMouseOver, onMouseLeave, height, mobileHeight, mobileHeightSmall}) =>
<SquareWrapper maxSize={size}>
    <Image src={src} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} margin="15px 0px" height={height} mobileHeight={mobileHeight}
    mobileHeightSmall={mobileHeightSmall}
    maxHeight="none" size={size || '100%'} subImg={subImg}/>
</SquareWrapper>
