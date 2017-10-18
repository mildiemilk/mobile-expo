import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import StarRating from '../molecules/StarRating'

export default ({name,shop,rating}) => 
<Wrapper bigScreenWidth="400px">
    <H3>{name}</H3>
    <H5>{shop}</H5>
    Rating: <StarRating score={rating}/>
</Wrapper>