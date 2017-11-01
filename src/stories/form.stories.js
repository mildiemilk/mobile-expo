import { storiesOf } from '@storybook/react'
import ContactForm from './ContactForm'
import { Provider } from 'react-redux'
import store from './store'

storiesOf('form', module)
.add('empty form', ()=> (
    <Provider store={store}>
        <ContactForm onSubmit={()=>console.log("click")}/>
    </Provider>
))