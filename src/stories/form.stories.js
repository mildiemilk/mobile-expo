import { storiesOf } from '@storybook/react'
import Input from '../../view/atoms/InputText'
import Form from './Form'
import {Provider} from 'react-redux'
import store from './store'

storiesOf('form', module)
.addDecorator(story => <Provider store={store}>
<Form onSubmit={() => console.log("click")}>
    {story()}
</Form>
</Provider>)
.add('empty form', ()=> (
  <Input name="firstName" component="input" type="text" />  
))
