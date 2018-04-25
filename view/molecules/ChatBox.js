import { Button, Comment, Form, Header, Card , Icon, List } from 'semantic-ui-react'
import styled from 'styled-components'
import color from '../../static/json/color.json'
import H3 from '../atoms/H3'
import TimeAgo from 'react-timeago'
import thaiStrings from 'react-timeago/lib/language-strings/th'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(thaiStrings)

const ChatBubble = styled.div`
    background: ${color.blue};
    padding:10px;
    width:200px;
    border-radius: 15px;
    margin-top:4px;
`

const FirsPersonChatBubble = styled.div`
    background: ${color.pastelLight};
    padding:10px;
    width:200px;
    border-radius: 15px;
    margin-top:4px;
`

const ResponderChat = props => <Comment>
<Comment.Content>
    <Comment.Author>{props.sender === 'sponsor' ? 'ผู้แนะนำสินค้า' : 'เจ้าของสินค้า'}</Comment.Author>
    <ChatBubble>
        <Comment.Text>{props.message}</Comment.Text>
    </ChatBubble>
    <Comment.Metadata>
    <TimeAgo date={props.timestamp}  formatter={formatter}/>
    </Comment.Metadata>
</Comment.Content>
</Comment>

const SenderChat = props => <Comment style={{right:'0', marginRight:'10px'}}>
<Comment.Content style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
    <Comment.Author>ลูกค้า</Comment.Author>
    <FirsPersonChatBubble>
        <Comment.Text>{props.message}</Comment.Text>
    </FirsPersonChatBubble>
    <Comment.Metadata>
    <TimeAgo style={{paddingRight:'4px'}} date={props.timestamp} formatter={formatter}/>
    </Comment.Metadata>
</Comment.Content>
</Comment>

export default props => 
<Card style={{width:'300px', position:'fixed', bottom:'0', right:'10px', zIndex:'1000', boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', maxHeight:'90vh'}}>
    <Card.Content style={{background:color.blue, color:'white', position:'relative', height:'50px'}}><Icon onClick={props.onClose} style={{position:'absolute', right:'0'}} size="large" name='minus'/></Card.Content>
    <Card.Content style={{background:'#fafffe', overflow:'auto'}}>
        <Comment.Group divided relaxed style={{minHeight:'300px'}}>
            { props.chatroom && props.chatroom.chats && props.chatroom.chats.map( 
                chat => chat.sender === 'buyer'? 
                <SenderChat {...chat}/>: 
                <ResponderChat {...chat}/>) 
            }
        </Comment.Group>
    </Card.Content>
    <Card.Content>
        <Form reply>
        <Form.TextArea style={{maxHeight:'100px'}}/>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Button style={{background:color.blue}} content='ส่งข้อความ' labelPosition='right' icon='play' primary />
        </div>
        </Form>
    </Card.Content>
</Card>