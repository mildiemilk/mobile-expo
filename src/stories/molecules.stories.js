import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddImageSection from '../../view/molecules/AddImageSection'

storiesOf('MainImage', module)
.add('mainImage no image set', ()=> (
	<AddImageSection />
))
