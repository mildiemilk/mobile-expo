import Image from '../atoms/Image'
import SquareWrapper from '../atoms/SquareWrapper'

export default ({src, size, subImg}) =>
<SquareWrapper maxSize={size}>
    <Image src={src}  size={size || '400px'} subImg={subImg}/>
</SquareWrapper>
