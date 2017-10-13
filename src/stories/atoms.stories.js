import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '../../view/atoms/Button'
import ExitButton from '../../view/atoms/ExitButton'
import Dropzone from '../../view/atoms/Dropzone'
import Input from '../../view/atoms/InputText'
import Image from '../../view/atoms/Image'
import SquareWrapper from '../../view/atoms/SquareWrapper'

storiesOf('Button', module)
	.add('with text', ()=> (
		<Button onClick={action('clicked')}>Hello </Button>
	))

storiesOf('ExitButton', module)
.add('with text', ()=> (
	<ExitButton onClick={action('clicked')}>x</ExitButton>
))

storiesOf('Dropzone', module)
.add('div', ()=> (
	<div style={{height: '200px', width: '200px', border: '1px black solid'}}>
	<Dropzone onDrop={action('drop')}></Dropzone>
	</div>
))
.add('div with img inside', ()=> (
	<div style={{height: '200px', width: '200px'}}>
	<Dropzone onDrop={action('drop')}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RlnwzpAqKPdW3vXVpKg_oJZ7u5QHRD672y_Eih0khjPhiRVB"/></Dropzone>
	</div>
))

storiesOf('Input', module)
.add('input', () => (
	<Input />
))
.add('input with div wrap', () => (
	<div style={{height: '400px', width: '400px', border: '1px black solid'}} >
		<Input />
	</div>
))
.add('input with name div wrap', () => (
	<div style={{height: '400px', width: '400px', border: '1px black solid'}} >
		<span style={{margin: '4px'}}>input name</span><Input />
	</div>
))

storiesOf('Image', module)
.add('image square', () => (
	<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dmc_VEuSoSFl3zKExQ81xU8IJd4P6fFzwh2jEc4oGMkLcXDCHg" />
))
.add('image landscape', () => 
	<Image src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" />
)
.add('image potrait', () => 
	<Image src="https://i.pinimg.com/736x/06/13/96/061396e21def1c0560d0cb11e8c70cc5--studio-photography-poses-fashion-photography-poses.jpg" />
)
.add('image compare', () => 
	<div>
		<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dmc_VEuSoSFl3zKExQ81xU8IJd4P6fFzwh2jEc4oGMkLcXDCHg" />
		<Image src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" />
		<Image src="https://i.pinimg.com/736x/06/13/96/061396e21def1c0560d0cb11e8c70cc5--studio-photography-poses-fashion-photography-poses.jpg" />		
	</div>
)
.add('image in 400px div', () => 
<div>
<div style={{width: '400px', height: '400px', border:'2px solid gray'}}>
	<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dmc_VEuSoSFl3zKExQ81xU8IJd4P6fFzwh2jEc4oGMkLcXDCHg" />
</div>
<div style={{width: '400px', height: '400px', border:'2px solid gray'}}>
	<Image src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" />
</div>
<div style={{width: '400px', height: '400px', border:'2px solid gray'}}>
	<Image src="https://i.pinimg.com/736x/06/13/96/061396e21def1c0560d0cb11e8c70cc5--studio-photography-poses-fashion-photography-poses.jpg" />		
</div>
</div>
)
.add('image in max width 400px div', () => 
<div>
<div style={{maxWidth: '400px', maxHeight: '400px', height: '400px', width: '100%', border:'2px solid gray'}}>
	<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dmc_VEuSoSFl3zKExQ81xU8IJd4P6fFzwh2jEc4oGMkLcXDCHg" />
</div>
<div style={{maxWidth: '400px', maxHeight: '400px', height: 'auto', width: '100%', border:'2px solid gray'}}>
	<Image src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" />
</div>
<div style={{maxWidth: '400px', maxHeight: '400px', height: 'auto', width: '100%', border:'2px solid gray'}}>
	<Image src="https://i.pinimg.com/736x/06/13/96/061396e21def1c0560d0cb11e8c70cc5--studio-photography-poses-fashion-photography-poses.jpg" />		
</div>
</div>
)

storiesOf('SquareWrapper', module)
.add('SquareWrapper difference size', () => 
	<div>
		<SquareWrapper maxSize="200px" style={{backgroundColor:"red"}}/>
	</div>
)
.add('SquareWrapper with Image', ()=>
<div>
	<SquareWrapper maxSize="200px">
		<Image src="https://i.pinimg.com/736x/06/13/96/061396e21def1c0560d0cb11e8c70cc5--studio-photography-poses-fashion-photography-poses.jpg" />				
	</SquareWrapper>
	<SquareWrapper maxSize="200px">
		<Image src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" />
	</SquareWrapper>
	<SquareWrapper maxSize="200px">
		<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dmc_VEuSoSFl3zKExQ81xU8IJd4P6fFzwh2jEc4oGMkLcXDCHg" />
	</SquareWrapper>		
</div>
)
