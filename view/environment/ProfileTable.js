import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'
import OrderTable from '../ecosystems/OrderTable'

export default ({table, userUid, setOrderStatus}) => {
  const sellTable = table!==undefined&&table.length>=1? table.filter(item => item.sellerId === userUid):null
  const sponsorTable = table!==undefined&&table.length>=1? table.filter(item => item.sponsorId === userUid):null
  return (<Wrapper noBorder>
  <OrderTable orders={sellTable} setOrderStatus={setOrderStatus}/>
  <OrderTable orders={sponsorTable} setOrderStatus={setOrderStatus}/>
</Wrapper>)
}