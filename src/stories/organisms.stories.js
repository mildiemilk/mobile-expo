import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Form from './Form'
import {Provider} from 'react-redux'
import store from './store'
import AddedImages from '../../view/organisms/AddedImages'
import ProductRegisterText from '../../view/organisms/ProductRegisterText'
import ComissionInput from '../../view/organisms/ComissionInput'
import ItemCard from '../../view/organisms/ItemCard'
import AddProduct from '../../view/organisms/AddProduct'
import UserProfile from '../../view/organisms/UserProfile'
import AddressForm from '../../view/organisms/AddressForm'
import DisplayImages from '../../view/organisms/DisplayImages'
import DisplayProductText from '../../view/organisms/DisplayProductText'
import CreditCard from '../../view/organisms/CreditCard'
import JsonTable from '../../view/organisms/JsonTable'
import OrderStatusButton from '../../view/organisms/OrderStatusButton'
import WebExplain from '../../view/organisms/WebExplain';

storiesOf('AddedImages', module)
	.add('no image', ()=> (
		<AddedImages />
	))
	.add('display Mode', () =><AddedImages />)

storiesOf('ProductRegisterText', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
	.add('default', () => (
		<ProductRegisterText />
	))


storiesOf('ComissionInput', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
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

storiesOf('AddProduct', module)
	.add('add product', ()=> <AddProduct/>)
	.add('add product next to item card', ()=> <div style={{display:"flex", flexDirection: "row"}}> 
			<ItemCard userProduct={userProduct} userUid='xxxx' productKey='1'/>
			<ItemCard userProduct={userProduct} userUid='xx' productKey='1'/>
			<AddProduct/>
		</div>
		)
storiesOf('User Profile', module)
	.add('default', ()=><UserProfile name="Peak" shop="Blue Shirt Shop" rating="3"/>)

storiesOf('Address Form', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
	.add('default', ()=> <AddressForm/>)

storiesOf('Display Images', module)
	.add('default', ()=><DisplayImages/>)

storiesOf('Display Product Text', module)
	.add('default', ()=><DisplayProductText productName="Blue Shirt" shopName="Peak shop" price="100.00"/>)

storiesOf('Credit Card', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
	.add('default', ()=><CreditCard />)

const headerJSON = {
	number : 'No.',
	name: 'Name',
	product: 'Product',
	total: 'Total',
	status: 'Status'
}
const products = [
	{
		number: 1,
		name: 'Manassanan',
		// product: {
		// 	name: 'hamburger',
		// 	quantity: 4,
		// 	price: 115
		// }
		product: 'hamburger',
		total: 500,
		id:'12345',
		status: 'pending'
	},
	{
		number: 1,
		name: 'Peak',
		product: 'blue shirt',
		total:200,
		id:'12345',
		status: 'success'
	}
]

storiesOf('JSON Table', module)
	.add('no data', ()=> <JsonTable />)
	.add('default', ()=><JsonTable headerJson={headerJSON} bodyJsonArray={products}/>)

storiesOf('OrderStatusButton', module)
	.add('default', ()=><OrderStatusButton  />)
	.add('pending', ()=><OrderStatusButton status='pending'/>)
	.add('success', ()=><OrderStatusButton status='success'/>)
	.add('delivered', ()=><OrderStatusButton status='delivered'/>)

storiesOf('WebExplain', module)
	.add('default', ()=><WebExplain/>)
