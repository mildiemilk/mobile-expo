import Image from '../atoms/Image'
import SquareWrapper from '../atoms/SquareWrapper'

export default ({src, size, subImg, onMouseOver, onMouseLeave}) =>
<SquareWrapper maxSize={size}>
    <Image src={src} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} margin="15px 0px" height="none" maxHeight="none" size={size || '400px'} subImg={subImg}/>
</SquareWrapper>
