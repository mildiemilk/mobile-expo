import React from 'react'
import Link from 'next/link'
import {Button, Icon} from 'semantic-ui-react'
import FacebookProvider, { Share } from 'react-facebook'
import copy from 'copy-to-clipboard'
import color from '../../static/json/color.json'

const link = (productId, userUid) => `http://${window.location.hostname}${window.location.port?`:${window.location.port}`:''}/p/${productId}/${userUid}`

const copyLink = (productId, userUid) => {
    copy(link(productId,userUid))
    alert('ลิงค์ถูก copy แล้ว')
}

export default ({product, productId, userUid, isSponsor}) =>
<Button.Group disabled={!product.active && isSponsor} size='mini'>
    {!isSponsor?
        userUid === product.userUid ?
    <Link as={`/p/edit/${productId}/${userUid}`} href={`/productRegister?productID=${productId}&userID=${userUid}`}>
        <Button icon size='mini' disabled={!product.active && isSponsor} basic color='blue'>แก้ไข <Icon name='write'/></Button>
    </Link>
    :null:null}
    <Link as={`/p/${productId}/${userUid}`} href={`/product?productID=${productId}&userID=${userUid}`}>
        <Button icon size='mini' disabled={!product.active && isSponsor} basic color='green'>ดู​ตัวอย่าง <Icon name='unhide'/></Button>
    </Link>
    <Button icon size='mini' color='teal' basic disabled={!product.active && isSponsor} onClick={()=>!product.active && isSponsor?copyLink(productId, userUid):alert('สินค้าไม่เปิดให้แชร์')} >ลิงค์ <Icon name='clone'/></Button>	
    <FacebookProvider appId={process.env.FACEBOOK_APP_ID}> 
        <Share href={link(productId, userUid)}>
            <Button icon size='mini' disabled={!product.active && isSponsor} color='blue' >แชร์ <i className="fa fa-share" aria-hidden="true"  textColor={color.darkText} ></i></Button>
        </Share>
    </FacebookProvider>
</Button.Group>