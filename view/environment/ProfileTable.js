import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'
import OrderTable from '../ecosystems/OrderTable'

export default ({table, userUid, setOrderStatus, handleClickView, isView, showView, isTableMobile}) => {
  const sellTable = table!==undefined&&table.length>=1? table.filter(item => item.sellerId === userUid):null
  const sponsorTable = table!==undefined&&table.length>=1? table.filter(item => item.sponsorId === userUid):null
  return (
  <div style={{flexGrow:"2"}}>
    {!isView || (showView === 'first')?
      <Wrapper>
        <h2 style={{ float: 'left' }}>คำสั่งซื้อในฐานะผู้ขาย</h2>
        {!isView? <a style={{ cursor: 'pointer', float: 'right' }} onClick={() => handleClickView('first')}>View all</a> : null}
        <OrderTable orders={sellTable} setOrderStatus={setOrderStatus}/>
      </Wrapper>
      : null
    }
    {!isView || (showView === 'second')?
      <Wrapper>
        <h2 style={{ float: 'left' }}>คำสั่งซื้อในฐานะผู้แนะนำ</h2>
        {!isView? <a style={{ cursor: 'pointer', float: 'right' }} onClick={() => handleClickView('second')}>View all</a> : null}
        <OrderTable orders={sponsorTable} setOrderStatus={setOrderStatus}/>
      </Wrapper>
      : null
    }
</div>)
}
