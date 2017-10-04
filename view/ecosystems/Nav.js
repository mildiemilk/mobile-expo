import React from 'react'
import Link from 'next/link'

export const NavItem= ({to, children}) => 
	<li role="presentation">
		<Link href={to}>{children}</Link>
	</li>