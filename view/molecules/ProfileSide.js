import React, { Component } from 'react'
import { Sidebar, Segment, Container, Image, Icon, Header, Label } from 'semantic-ui-react'
import ProfileDetail from '../environment/ProfileDetail'
import Button from '../atoms/Button';
import Wrapper from '../atoms/Wrapper';

class ProfileSide extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    const { content, sideContent } = this.props
    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>
            <Wrapper noMargin={true} noBorder={true}>
              {sideContent}
              <Button round width='100%' margin='2px'>สินค้าทั้งหมด</Button>
              <Button round width='100%' margin='2px'>คำสั่งซื้อ
                <Label circular color='red'>1112</Label>
              </Button>
              <Button round width='100%' margin='2px'>ลงสินค้าเพิ่ม</Button>
            </Wrapper>
          </Sidebar>
          <Sidebar.Pusher>
            <div basic>
              <div style={{ float: 'left'}}><Button onClick={this.toggleVisibility}>></Button></div>
              {content}
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default ProfileSide