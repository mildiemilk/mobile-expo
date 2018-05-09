import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import Slider from 'react-slick'
import styled from 'styled-components'
import ItemCard from '../organisms/ItemCard'

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
	slidesToShow: 4,
	slidesToScroll: 3,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />
};

const DivNoContent = styled.div`
	background-color: #f2f2f2;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 15px;
`

export default props => <Wrapper maxWidth="94vw" bigScreenWidth="70vw">
	<H3>สินค้าที่คุณเป็นเจ้าของ{!props.isView&& <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView('first')}>View all</a> }</H3>
	{Object.keys(props.userProducts).length >0
	?Object.keys(props.userProducts).length <= 3 || props.isView
		?	props.userProducts &&
			Object.keys(props.userProducts).reverse().map( userProductKey => 
				<div style={{display:'inline-block'}} key={userProductKey}>
					<ItemCard 
						{...props}
						productKey={userProductKey}
						key={userProductKey} 
						product={props.userProducts[userProductKey]} 
						isSponsor={false}
					/>
				</div>)
		: <Slider {...settings}>
		{ props.userProducts &&
				Object.keys(props.userProducts).reverse().map( userProductKey =>
						<div style={{height:'100%'}}>
							<ItemCard 
								{...props}
								key={userProductKey} 
								productKey={userProductKey}
								product={props.userProducts[userProductKey]} 
								isSponsor={false}
							/>
						</div>)
				}
		</Slider>
: <DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}		
</Wrapper>
