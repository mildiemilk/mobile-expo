import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ProductRegisterMain from '../../view/ecosystems/ProductRegisterMain'
import ProductDisplay from '../../view/ecosystems/ProductDisplay'
import User from '../../view/ecosystems/User'
import BankAccountsForTransfer from '../../view/ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../../view/ecosystems/CreditCardExpandButton'
import OrderTable from '../../view/ecosystems/OrderTable'
import {orders} from './const'
import Form from './Form'
import {Provider} from 'react-redux'
import store from './store'


storiesOf('ProductRegisterMain', module)
.addDecorator(story => <Provider store={store}>
	<Form onSubmit={() => console.log("click")}>
			{story()}
	</Form>
	</Provider>)
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

storiesOf('BankAccountForTransfer', module)
    .add('default', ()=>
    <BankAccountsForTransfer />
)

storiesOf('CreditCardExpandButton', module)
    .addDecorator(story => <Provider store={store}>
        <Form onSubmit={() => console.log("click")}>
                {story()}
        </Form>
        </Provider>)
    .add('default', ()=> <CreditCardExpandButton />)


storiesOf('OrderTable', module)
        .add('default', ()=> <OrderTable />)
        .add('with values', ()=> <OrderTable orders={orders} />)
