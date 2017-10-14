import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddedImages from '../../view/organisms/AddedImages'

storiesOf('AddedImages', module)
	.add('no image', ()=> (
		<AddedImages />
	))