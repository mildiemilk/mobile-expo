import styled from 'styled-components'
import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import OrderTable from '../ecosystems/OrderTable'

const DivNoContent = styled.div`
	background-color: #f2f2f2;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 15px;
`
export default ({table, userUid, setOrderStatus, handleClickView, isView, showView, isTableMobile}) => {
  const sellTable = table!==undefined&&table.length>=1? table.filter(item => item.sellerId === userUid):null
  const sponsorTable = table!==undefined&&table.length>=1? table.filter(item => item.sponsorId === userUid):null
  return (
  <div style={{flexGrow:"2"}}>
    {!isView || (showView === 'first')?
      <Wrapper minWidthDesktop="900px" minWidthMobile="90vw" bigScreenWidth="70vw">
        <Flex>
          <div>
           <h3 style={{ float: 'left' }}>คำสั่งซื้อในฐานะผู้ขาย</h3>
           {!isView? <a style={{ cursor: 'pointer', float: 'right' }} onClick={() => handleClickView('first')}>View all</a> : null}
          </div>
          {table
           ? <OrderTable orders={sellTable} setOrderStatus={setOrderStatus}/>
           :<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>
          }
        </Flex>
      </Wrapper>
      : null
    }
    {!isView || (showView === 'second')?
      <Wrapper minWidthDesktop="900px" minWidthMobile="90vw" bigScreenWidth="70vw">
        <Flex>
          <div>
            <h3 style={{ float: 'left' }}>คำสั่งซื้อในฐานะผู้แนะนำ</h3>
            {!isView? <a style={{ cursor: 'pointer', float: 'right' }} onClick={() => handleClickView('second')}>View all</a> : null}
          </div>
          {sponsorTable
          ? <OrderTable orders={sponsorTable} setOrderStatus={setOrderStatus}/>
          : <DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>
          }
        </Flex>
      </Wrapper>
      : null
    }
</div>)
}
