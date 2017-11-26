import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import StarRating from '../molecules/StarRating'
import BalancePanel from '../molecules/BalancePanel'

export default ({profileImage, name,shop,rating, balance, email}) => 
<Wrapper bigScreenWidth="400px">
    <H3>{name}</H3>
    <H5>{shop}</H5>
    <H5>{email}</H5>
    {rating? 
    <div>
        <span>Rating: </span><StarRating score={rating}/> 
    </div>
    :null
    }
    {
        balance?
    <BalancePanel balance={balance}/> : null
    }
</Wrapper>