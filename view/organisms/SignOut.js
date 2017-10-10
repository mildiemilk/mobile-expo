import { Grid, Icon, Button } from 'semantic-ui-react'

export default ({signOut}) =>
<div>
	<h3>Do you want to Signout?</h3>
	<Grid.Row>
		<Grid.Column>
			<Button 
				size='medium' 
				color='red' 
				onClick={()=>signOut()}>
				<Icon name='user' /> 
				Sign out
			</Button>
		</Grid.Column>
	</Grid.Row>
</div>
