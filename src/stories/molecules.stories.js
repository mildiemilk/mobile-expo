import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddImageSection from '../../view/molecules/AddImageSection'
import ImageDisplay from '../../view/molecules/ImageDisplay'
import InputWithLabel from '../../view/molecules/InputWithLabel'
import AddStocksButton from '../../view/molecules/AddStocksButton'
import AddStocksInput from '../../view/molecules/AddStocksInput'
import BalancePanel from '../../view/molecules/BalancePanel'
import StarRating from '../../view/molecules/StarRating'
import ContactInformation from '../../view/molecules/ContactInformation'
import DeliveryDetail from '../../view/molecules/DeliveryDetail'
import Modal from '../../view/molecules/Modal'
import SocialShare from '../../view/molecules/SocialShare'
import CardNumberInput from '../../view/molecules/CardNumberInput'
import CreditCardMonth from '../../view/molecules/CreditCardMonth'
import CreditCardYear from '../../view/molecules/CreditCardYear'
import BankAccount from '../../view/molecules/BankAccount'
import CvvInput from '../../view/molecules/CvvInput'
import MultiTab from '../../view/molecules/Multitab'
import Select from '../../view/molecules/Select'
import {orders} from './const'
import Form from './Form'
import {Provider} from 'react-redux'
import store from './store'
import Jumbotron from '../../view/molecules/Jumbotron'
import WebExplainCard from '../../view/molecules/WebExplainCard'
import ChatButton from '../../view/molecules/ChatButton'
import ChatBox from '../../view/molecules/ChatBox'

storiesOf('Jumbotron', module)
.add('default', ()=> <div style={{backgroundColor:'#F7F7F7', width:'100vw', height:'100vh', display:'relative'}}>
	<Jumbotron/>
</div>)

storiesOf('WebExplainCard',module)
	.add('default', ()=> <WebExplainCard/>)

const items = {
	paragraph: 'ข้อความ',
	header:'หัวข้อ',
	bold: 'ตัวหนา',
	image: 'รูปภาพ',
	video: 'วิดีโอ',
	youtube: 'ลิงค์ youtube'
}

storiesOf('Select', module)
.add('default', ()=> <Select/>)
.add('with item', ()=> <Select items={items}/>)

storiesOf('MultiTab', module)
.add('default', ()=> <MultiTab/>)
.add('1Tab', ()=> <MultiTab tabs={[
	{
		buttonLabel: 'hello',
		component: <div style={{backgroundColor: 'salmon', height:'300px', width:'300px'}}>hello</div>
	}
]}/>)
	.add('2Tab', ()=> <MultiTab tabs={[
		{
			buttonLabel: 'hello',
			component: <div style={{backgroundColor: 'salmon', height:'300px', width:'300px'}}>hello</div>
		},
		{
			buttonLabel: 'hello2',
			component: <div style={{backgroundColor: 'blue', height:'300px', width:'300px'}}>hello2</div>
		}
	]}/>)

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

storiesOf('Social share', module)
	.add('default', ()=><SocialShare link="www.google.com" />)

storiesOf('Credit Card Exp', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
	.add('default', () => <div style={{display:"flex", flexDirection:"row"}}><CreditCardMonth name="month"/><CreditCardYear name="year"/></div>)

storiesOf('Card Number Input', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
.add('input', ()=> <CardNumberInput />)

storiesOf('Cvv Input', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
.add('input', ()=> <CvvInput />)

storiesOf('Bank Account', module)
	.add('Bangkok Bank', ()=> <BankAccount backgroundImage="linear-gradient(342deg, #3023ae, #4f91f4 92%, #53a0fd)" bankName="ธนาคารกรุงเทพ" accountNumber="1234567890" accountName="ปิยภูมิ ศรไพศาล" />)
	.add('Kasikorn Bank', ()=> <BankAccount backgroundImage="linear-gradient(135deg, #5ed130, #429321)" bankName="ธนาคารกสิกร" accountNumber="1234567890" accountName="ปิยภูมิ ศรไพศาล" />)
	.add('SCB Bank', ()=> <BankAccount backgroundImage="radial-gradient(circle at 0 0, #8662ba, #4e3384)" bankName="ธนาคารไทยพานิชย์" accountNumber="1234567890" accountName="ปิยภูมิ ศรไพศาล" />)
	
storiesOf('Chat Button', module)
	.add('default', ()=><ChatButton/>)
	.add('with other component', ()=><div>
		<h1>hello I am on top of you</h1>
		<ChatButton />
		<h1>hello I am at the bottom of you </h1>
	</div>)

storiesOf('Chat Box', module)
	.add('default', ()=><ChatBox />)