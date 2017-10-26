import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ProductRegisterMain from '../../view/ecosystems/ProductRegisterMain'
import ProductDisplay from '../../view/ecosystems/ProductDisplay'
import User from '../../view/ecosystems/User'
import {orders} from './const'

storiesOf('ProductRegisterMain', module)
    .add('default', () => <ProductRegisterMain/>)

storiesOf('User', module)
    .add('default', ()=>
    <User 
        profileImage="https://cdn3.f-cdn.com/files/download/33774556/friendly+face.jpg" 
        name="Peak" 
        shop="peak shop" 
        rating="3" 
        phone="0944349911" 
        address="149/18, chongnontri yanawa" 
        email="peak@test.com"
        balance="10000"
        orders={orders}
    />)

storiesOf('ProductDisplayMain', module)
    .add('default', ()=>
    <ProductDisplay
        productName="blue shirt"
        shopName="peak shop"
        price="1000"

    />
    )