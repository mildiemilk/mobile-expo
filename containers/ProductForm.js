import React from 'react'
import { Image } from 'react-bootstrap'
import { Button, Icon, Grid, Form, Segment, Divider } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import { TextInput } from '../components/Form'
import { FieldArray } from 'redux-form'
import ProductDescriptionPreview from '../components/ProductDescription'
import ProductDescriptionForm from '../components/ProductDescriptionForm'

export default ({addProductDescription, productDescription, handleSubmit}) => 
<div>
	<Head/>
	<Header/>
	<Grid>
		<Form>
			<Grid.Row>
					<h1>Register Product</h1>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
				<TextInput
					name="productName"
					type="text"
					placeholder="product name"
					label="product name"
				/>
				</Grid.Column>
				<Grid.Column>			
					<TextInput
						name="brandName"
						label="brand name"
						type="text"
						placeholder="brand name"
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
				<TextInput
					name="price"
					type="text"
					placeholder="00.00 baht"
					label="price"
				/>
				</Grid.Column>
				<Grid.Column>
					<TextInput
						name="comissionPercent"
						type="text"
						placeholder="00%"
						label="comissionPercent"
					/>
				</Grid.Column>
				<Grid.Column>
				<TextInput
					name="comissionCash"
					type="text"
					placeholder="00 baht"
					label="comissionCash"
				/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<FieldArray name="productDescription" component={ProductDescriptionForm} productDescription={productDescription}/>
			</Grid.Row>
			<Grid.Row>
				<Button onClick={()=>handleSubmit(productDescription)}>Submit</Button>
			</Grid.Row>
			<Grid.Row>
				<h4>Preview</h4>
			</Grid.Row>
			<Grid.Row>
				<ProductDescriptionPreview productDescription={productDescription} />
			</Grid.Row>
			<Grid.Row>
				<h3>image</h3>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<div className="image-wrapper">
						<i className="overlay-image fa fa-pencil" />
						<image alt="template" />
					</div>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="plus" />
				</Grid.Column>
			</Grid.Row>
		</Form>
	</Grid>
</div>
