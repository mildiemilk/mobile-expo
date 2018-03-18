import React from 'react'
import { List, Image } from 'semantic-ui-react'
import Button from '../atoms/Button';
import banks from '../../static/json/bank.json'

class InternetBanking extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			check: 'internet_banking_scb'
		}
	}

	handleSelect = check => this.setState({ check })

	render () {
		const { check } = this.state
		const { createPaymentInternetBanking, transaction, total } = this.props
		return <div>
		<List divided relaxed>
			{banks.map(bank => 
				<List.Item as='a' key={bank.nameEng} onClick={() => this.handleSelect(bank.nameEng)}>
					<Image src={bank.logo} size='mini' verticalAlign='middle' />
					<List.Content>
						<List.Header as='a'>{bank.name}</List.Header>
						<List.Description as='a'>Transaction fee {bank.fee} bath</List.Description>
					</List.Content>
					{check === bank.nameEng?
						<List.Content floated='right'>
							<List.Icon name='checkmark' size='big' verticalAlign='middle' color='green'/>	
						</List.Content>
						:null
					}
					
				</List.Item>
			)}
		</List>
		<Button fullWidth onClick={() => createPaymentInternetBanking(total,'thb',check, transaction)}>เลือก</Button>
	</div>
	}
}

export default InternetBanking