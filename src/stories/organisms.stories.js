import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddedImages from '../../view/organisms/AddedImages'
import ProductRegisterText from '../../view/organisms/ProductRegisterText'
import ComissionInput from '../../view/organisms/ComissionInput'

storiesOf('AddedImages', module)
	.add('no image', ()=> (
		<AddedImages />
	))

storiesOf('ProductRegisterText', module)
	.add('default', () => (
		<ProductRegisterText />
	))


storiesOf('ComissionInput', module)
	.add('default', () => (
		<ComissionInput />
	))