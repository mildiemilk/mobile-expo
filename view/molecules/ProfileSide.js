import { Sidebar,Label } from 'semantic-ui-react'
import Link from 'next/link'
import Button from '../atoms/Button';
import Wrapper from '../atoms/Wrapper';

export default props => {
  const { content, sideContent, table, userUid, handleClick, isVisible, toggleVisibility} = props
  const pending = table!==undefined&&table.length>=1? table.filter(item => (item.sellerId === userUid) && (item.status === 'pending')).length :0
  return (
      <Sidebar.Pushable>
          <Sidebar animation='push' width='wide' visible={isVisible} icon='labeled'>
            <Wrapper noMargin noBorder noBorderRadius>
                {sideContent}
              <Button secondary round fullWidth margin='10px 2px 2px 2px' onClick={() => handleClick('table')}>สินค้าทั้งหมด</Button>
              <Button secondary round fullWidth margin='2px' onClick={() => handleClick('order')}>คำสั่งซื้อ
                {pending>0? <Label circular color='red'>{pending}</Label> : null}
              </Button>
              <Link href="/productRegister"><Button secondary round fullWidth margin='2px'>+ ลงสินค้า</Button></Link>
              <Link href="/member"><Button secondary round fullWidth margin='2px'>สมาชิก</Button></Link>
            </Wrapper>
          </Sidebar>
        <Sidebar.Pusher>
          <div style={{ display: 'flex' }}>
            <div style={{ float: 'left', flex: '0 1 auto'}}><Button height="100vh" nonMaxHeight padding='5px' onClick={toggleVisibility}>{isVisible?'<':'>'}
            </Button></div>
            {content}
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
  )

}
