import H3 from '../atoms/H3'
import ItemCard from '../organisms/ItemCard'

export default props => 
<Wrapper widthSmall="90vw" paddingRight="30px" minWidthMobile="90vw">
<H3>{props.title}{!props.isView&& <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView(props.page)}>View all</a>}</H3>
	{Object.keys(props.products).length >0
	?props.isView
	?props.products && Object.keys(props.products).reverse().map( productKey => <div><ItemCard 
				{...props}
				key={productKey}
				isSponsor={true}
				product={props.products[productKey]}
				productKey={productKey}
			/></div>)
	:props.products && Object.keys(props.products).reverse().slice(0,5).map( 
		productKey => <div><ItemCard 
				{...props}
				key={productKey}
				isSponsor={true}
				product={props.products[productKey]} 
				productKey={productKey}
			/></div>) 
	:<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
</Wrapper>
