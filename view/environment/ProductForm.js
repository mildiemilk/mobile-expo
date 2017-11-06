import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-bootstrap'
import { Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import TextInput from '../molecules/TextInput'
import { FieldArray } from 'redux-form'
import MainImage from '../molecules/MainImage'
import Button from '../atoms/Button'
import H1 from '../atoms/H1'
import ProductDescriptionPreview from '../ecosystems/ProductDescription'
import ProductDescriptionForm from '../ecosystems/ProductDescriptionForm'
import SubImage from '../organisms/SubImage'
import SubImageSection from '../atoms/SubImageSection'
import Segment from '../atoms/Segment'
import ProductRegisterMain from '../ecosystems/ProductRegisterMain'

const calcComissionCash = (value, previousValue, allValues) => 
(value > (0.75 - allValues['comissionPercent']/100) * allValues['price'] ? (0.75 - allValues['comissionPercent']/100) * allValues['price']: value )

const calcComissionPercent = value => value >= 75 ? 75 : value

export default ({addProductDescription, productDescription, handleSubmit, productImages, setProductImage, productName, price, brandName, shortDescription}) => 
<div>
	<Head/>
	<Header/>
	<ProductRegisterMain productImages={productImages} setProductImage={setProductImage}/>
</div>
