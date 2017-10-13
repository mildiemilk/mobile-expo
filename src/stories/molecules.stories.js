import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddImageSection from '../../view/molecules/AddImageSection'

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
