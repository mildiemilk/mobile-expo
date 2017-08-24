import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import color from '../asset/const/color.json'

export const Item = styled(Menu.Item)`
	a {
		color: ${color.dark};
	}
`
