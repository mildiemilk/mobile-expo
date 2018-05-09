import { Fragment} from 'react'
import ItemCard from '../organisms/ItemCard'
import DivNoContent from '../organisms/DivNoContent'
import Wrapper from '../atoms/Wrapper'
import ProfileProductSponsorPreview from './ProfileProductSponsorPreview';
import ProfileProductMobileView from '../molecules/ProfileProductMobileView';

export default props => <Fragment>{props.isView && <Button onClick={() => props.handleClickView('')}>Back</Button>}
{props.isItemMobile && <div>
		{(!props.isView || (showView === 'first'))&&
			<ProfileProductMobileView
				products= {props.userProducts}
				title='สินค้าที่คุณเป็นเจ้าของงงงงง'
				page='first'
			/>
		}
		{(!props.isView || (props.showView === 'second'))&&
		<ProfileProductMobileView 
			products = {props.sponsorProducts}
			page='second'
			title='สินค้าที่คุณเป็นผู้แนะนำาาาาาาาาา'
		/>}
		{!props.isView &&	<Button onClick={props.handleItemCard} margin="10px 0px">Back</Button>}
</div>
}
{props.isTableMobile&&
	<div>
		<ProfileTable
			{...props}
			table={table !== undefined ?!isView? table.slice(0,3) : table: undefined}
		/>
		{!props.isView&&<Button onClick={handleTableMobile} margin="10px 0px">Back</Button>}
	</div>
}
</Fragment>
