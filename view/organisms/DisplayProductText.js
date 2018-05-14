import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'

export default ({productName, shopName, price, shortDescription}) =>
	<div>
		<H1>ชื่อสินค้า:{productName}</H1>
		<H3>ชื่อแบรนด์:{shopName}</H3>
		<H3>ราคาสินค้า: {price}</H3>
		<H5>คำอธิบาย: {shortDescription}</H5>
	</div>
