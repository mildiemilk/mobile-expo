import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddImageSection from '../../view/molecules/AddImageSection'
import InputWithLabel from '../../view/molecules/InputWithLabel'
import AddStock from '../../view/molecules/AddStock'
import OrderTable from '../../view/molecules/OrderTable'
import BalancePanel from '../../view/molecules/BalancePanel'
import StarRating from '../../view/molecules/StarRating'

storiesOf('MainImage', module)
.add('mainImage no image set', ()=> (
	<AddImageSection />
))
.add('mainImage image set', ()=> (
	<AddImageSection src="https://www.w3schools.com/w3images/fjords.jpg"/>
))
.add('mainImage size set', ()=> (
	<AddImageSection size="100px"/>
))
.add('mainImage image set size set', ()=> (
	<AddImageSection size="100px" src="https://www.w3schools.com/w3images/fjords.jpg"/>
))

storiesOf('Input with Label', module)
.add('input with label', ()=>(
<div>
	<InputWithLabel>
		hello world, สวัสดีจ้า
	</InputWithLabel>
	<InputWithLabel>
		how are you, สบายดีนะ
	</InputWithLabel>
</div>
))

storiesOf('Add Stock', module)
	.add('default', ()=><AddStock/>)

const orders = [
	{
		name: "Peak",
		quantity:1,
		status: "pending",
		date:"2017-10-16 00:00:00"
	},
	{
		name: "Bank",
		quantity:3,
		status: "pending",
		date:"2017-10-10 00:00:00"
	},
	{
		name:"Gift",
		quantity: 10,
		status: "pending",
		date:"2017-1-10 00:00:00"
	}
]

storiesOf('Order Table', module)
	.add('default', ()=><OrderTable orders={orders}/>)

storiesOf('Balance Panel', module)
	.add('default', ()=><BalancePanel balance={2000}/>)

storiesOf('Star Rating', module)
	.add('score = 1', ()=><StarRating score="1" maxScore="5"/>)
	.add('score = 2', ()=><StarRating score="2" maxScore="5"/>)
	.add('score = 3', ()=><StarRating score="3" maxScore="5"/>)
	.add('score = 4', ()=><StarRating score="4" maxScore="5"/>)
	.add('score = 5', ()=><StarRating score="5" maxScore="5"/>)