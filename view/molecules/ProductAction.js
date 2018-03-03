import React from 'react'
import Link from 'next/link'
import Button, { ButtonGroup } from '../atoms/Button'
import FacebookProvider, { Share } from 'react-facebook'
import copy from 'copy-to-clipboard'
import color from '../../static/json/color.json'

const link = (productId, userUid) => `http://${window.location.hostname}${window.location.port?`:${window.location.port}`:''}/p/${productId}/${userUid}`

const copyLink = (productId, userUid) => {
    copy(link(productId,userUid))
    alert('the link has been copied')
}

export default ({product, productId, userUid, isSponsor}) =>
        <ButtonGroup disabled={!product.active && isSponsor}>
        {!isSponsor?
            userUid === product.userUid ?
        <Link as={`/p/edit/${productId}/${userUid}`} href={`/productRegister?productID=${productId}&userID=${userUid}`}>
            <Button buttonDisabled={!product.active && isSponsor} background="none" textColor={color.darkText} basic color='#52BE80'>Edit</Button>
        </Link>
        :null:null}
        <Link as={`/p/${productId}/${userUid}`} href={`/product?productID=${productId}&userID=${userUid}`}>
            <Button buttonDisabled={!product.active && isSponsor} background="none" textColor={color.darkText} basic color='#45B39D'>Preview</Button>
        </Link>
        <Button buttonDisabled={!product.active && isSponsor} background="none" basic color='teal' onClick={()=>this.copyLink(productId, userUid)}  textColor={color.darkText} >GetLink</Button>	
        <FacebookProvider appId={process.env.FACEBOOK_APP_ID}> 
            <Share href={link(productId, userUid)}>
                <Button buttonDisabled={!product.active && isSponsor} background="none" basic color='#3f87a6'  textColor={color.darkText} >Share <i className="fa fa-share" aria-hidden="true"  textColor={color.darkText} ></i></Button>
            </Share>
        </FacebookProvider>
        </ButtonGroup>