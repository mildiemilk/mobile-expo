import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import StarRating from '../molecules/StarRating'
import BalancePanel from '../molecules/BalancePanel'

export default ({name,shop,rating, balance}) => 
<Wrapper bigScreenWidth="400px">
    <H3>{name}</H3>
    <H5>{shop}</H5>
    Rating: <StarRating score={rating}/>
    <BalancePanel balance={balance}/>
</Wrapper>