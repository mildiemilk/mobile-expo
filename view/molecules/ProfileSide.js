import React, { Component } from 'react'
import { Sidebar,Label } from 'semantic-ui-react'
import Link from 'next/link'
import ProfileDetail from '../environment/ProfileDetail'
import Button from '../atoms/Button';
import Wrapper from '../atoms/Wrapper';

class ProfileSide extends Component {
 
  render() {
    const { content, sideContent, table, userUid, handleClick, isVisible, toggleVisibility } = this.props
    const pending = table!==undefined&&table.length>=1? table.filter(item => (item.sellerId === userUid) && (item.status === 'pending')).length :0
    return (
      <div>
        <Sidebar.Pushable>
            <Sidebar animation='push' width='wide' visible={isVisible} icon='labeled' vertical inverted>
              <Wrapper height="100%" noMargin noBorder>
                {sideContent}
                <Button round fullWidth margin='2px' onClick={() => handleClick('table')}>สินค้าทั้งหมด</Button>
                <Button round fullWidth margin='2px' onClick={() => handleClick('order')}>คำสั่งซื้อ
                  {pending>0? <Label circular color='red'>{pending}</Label> : null}
                </Button>
                <Link href="/productRegister"><Button round fullWidth margin='2px'>ลงสินค้าเพิ่ม</Button></Link>
              </Wrapper>
            </Sidebar>
          <Sidebar.Pusher>
            <div style={{ display: 'flex' }}>
              <div style={{ float: 'left', flex: '0 1 auto'}}><Button fullHeight nonMaxHeight padding='5px' onClick={toggleVisibility}>></Button></div>
              {content}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default ProfileSide