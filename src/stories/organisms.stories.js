import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddedImages from '../../view/organisms/AddedImages'
import ProductRegisterText from '../../view/organisms/ProductRegisterText'
import ComissionInput from '../../view/organisms/ComissionInput'
import ItemCard from '../../view/organisms/ItemCard'
import UserProfile from '../../view/organisms/UserProfile'
import AddressForm from '../../view/organisms/AddressForm'
import DisplayImages from '../../view/organisms/DisplayImages'

storiesOf('AddedImages', module)
	.add('no image', ()=> (
		<AddedImages />
	))
	.add('display Mode', () =><AddedImages />)

storiesOf('ProductRegisterText', module)
	.add('default', () => (
		<ProductRegisterText />
	))


storiesOf('ComissionInput', module)
	.add('default', () => (
		<ComissionInput />
	))

const userProduct = {
	brandName : "Peak brand",
	comissionCash : 300,
	comissionPercent: 50,
	price: 2000,
	productDescription: 'test test',
	productName: 'blue shirt',
	productImages: [
		'https://rukminim1.flixcart.com/image/832/832/shirt/z/u/r/38-kpc-111-koolpals-original-imaecqp8yadyavcz.jpeg?q=70',
		'https://rukminim1.flixcart.com/image/832/832/shirt/p/r/h/40-kpc-109-koolpals-original-imae5ku5hpz65f7m.jpeg?q=70'
	],
	userUid: 'xxxx',
	stock: 100
}

storiesOf('ItemCard', module)
	.add('user is owner', ()=>(
		<ItemCard userProduct={userProduct} userUid='xxxx' productKey='1'/>
	))
	.add('user is seller', ()=>(
		<ItemCard userProduct={userProduct} userUid='xx' productKey='1'/>
	))

storiesOf('User Profile', module)
	.add('default', ()=><UserProfile name="Peak" shop="Blue Shirt Shop" rating="3"/>)

storiesOf('Address Form', module)
	.add('default', ()=> <AddressForm/>)

storiesOf('Display Images', module)
	.add('default', ()=><DisplayImages/>)