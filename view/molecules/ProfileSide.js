import React, { Component } from 'react'
import { Sidebar, Segment, Container, Image, Icon, Header, Label } from 'semantic-ui-react'
import Link from 'next/link'
import ProfileDetail from '../environment/ProfileDetail'
import Button from '../atoms/Button';
import Wrapper from '../atoms/Wrapper';

class ProfileSide extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    const { content, sideContent, handleClick } = this.props
    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>
            <Wrapper height="100%" noMargin noBorder>
              {sideContent}
              <Button round fullWidth margin='2px' onClick={() => handleClick('table')}>สินค้าทั้งหมด</Button>
              <Button round fullWidth margin='2px' onClick={() => handleClick('order')}>คำสั่งซื้อ
                <Label circular color='red'>1112</Label>
              </Button>
              <Link href="/productRegister"><Button round fullWidth margin='2px'>ลงสินค้าเพิ่ม</Button></Link>
            </Wrapper>
          </Sidebar>
          <Sidebar.Pusher>
            <div style={{ display: 'flex' }}>
              <div style={{ float: 'left', flex: '0 1 auto'}}><Button fullHeight nonMaxHeight padding='5px' onClick={this.toggleVisibility}>></Button></div>
              {content}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default ProfileSide