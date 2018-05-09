import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import Slider from 'react-slick'
import ItemCard from '../organisms/ItemCard'
import DivNoContent from '../organisms/DivNoContent'

const SampleNextArrow = ({className, style, onClick} ) =>
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray', color:'gray', borderRadius:'10px'}}
      onClick={onClick}
    ></div>

const SamplePrevArrow = ({className, style, onClick}) => 
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray', color:'gray', borderRadius:'10px'}}
      onClick={onClick}
    ></div>

const settings = {
	dots: true,
	slidesToShow:  3,
	slidesToScroll: 3,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />
};



export default props => <Wrapper maxWidth="94vw" bigScreenWidth="70vw">
	<H3>{props.title}{!props.isView&& <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView(props.page)}>View all</a> }</H3>
	{Object.keys(props.products).length >0
	?Object.keys(props.products).length <= 3 || props.isView
		?	props.products &&
			Object.keys(props.products).reverse().map( productKey => 
				<div style={{display:'inline-block'}} key={productKey}>
					<ItemCard 
						{...props}
						productKey={productKey}
						key={productKey} 
						product={props.products[productKey]} 
						isSponsor={props.isSponsor}
					/>
				</div>)
		: <Slider {...settings}>
		{ props.products &&
				Object.keys(props.products).reverse().map( productKey =>
						<div style={{height:'100%'}}>
							<ItemCard 
								{...props}
								key={productKey} 
								productKey={productKey}
								product={props.products[productKey]} 
								isSponsor={props.isSponsor}
							/>
						</div>)
				}
		</Slider>
: <DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}		
</Wrapper>
