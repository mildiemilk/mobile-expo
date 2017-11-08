import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddImageSection from '../../view/molecules/AddImageSection'
import ImageDisplay from '../../view/molecules/ImageDisplay'
import InputWithLabel from '../../view/molecules/InputWithLabel'
import AddStocksButton from '../../view/molecules/AddStocksButton'
import AddStocksInput from '../../view/molecules/AddStocksInput'
import OrderTable from '../../view/molecules/OrderTable'
import BalancePanel from '../../view/molecules/BalancePanel'
import StarRating from '../../view/molecules/StarRating'
import ContactInformation from '../../view/molecules/ContactInformation'
import DeliveryDetail from '../../view/molecules/DeliveryDetail'
import Modal from '../../view/molecules/Modal'
import {orders} from './const'
import Form from './Form'
import {Provider} from 'react-redux'
import store from './store'


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

storiesOf('Image for display on shops screen', module)
.add('sub display to buyer', ()=> (
	<ImageDisplay size="100px" src="https://www.w3schools.com/w3images/fjords.jpg"  />
))
.add('imge display to buyer', ()=>(
	<ImageDisplay src="https://www.w3schools.com/w3images/fjords.jpg"/>
))

storiesOf('Input with Label', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
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
	.add('default', ()=><AddStocksButton/>)

storiesOf('Add Stock Input', module)
	.add('default', ()=><AddStocksInput/>)

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

storiesOf('Contact Information', module)
	.add('default', ()=><ContactInformation phone="094434991" address="149/18, chongnontri, yanawa, 10120, bkk, thailand" shop="peak shop" email="peak@test.com" />)

storiesOf('DeliveryDetail', module)
	.add('default', ()=><DeliveryDetail order={orders[0]} />)

const context = <div>
	<h2>this is a text context</h2>
	<input />
	<p>This is so great </p>
</div>

storiesOf('Modal', module)
	.add('default', ()=> <Modal/>)
	.add('with Context and modal link', ()=> <Modal context={context}><a href="#">This is the Text</a></Modal>)
