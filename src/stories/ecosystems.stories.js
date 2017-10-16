import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import ProductRegisterMain from '../../view/ecosystems/ProductRegisterMain'

storiesOf('ProductRegisterMain', module)
    .add('default', () => <ProductRegisterMain/>)