import React from 'react'
import styled from 'styled-components'
import SquareWrapper from '../atoms/SquareWrapper'
import Image from '../atoms/Image'
import Dropzone from '../atoms/Dropzone'
import AddImg from '../../static/img/addimg.svg'

const AddImage = styled(AddImg)`
    max-width: 100%;
    max-height: -webkit-fill-available;
    display: ${props => (props.src ? 'none' : 'unset')};
    ${Dropzone}:hover & {
        display: unset;
        background: #f2f2f2;
    }
    @media (max-width: 600px) {
        max-width: ${props => (props.subimg ? '20%' : '80%')};
    }
`

export default ({ src, size, subimg, setProductImage, number }) => {
    return (
        <SquareWrapper maxSize={size}>
            <Dropzone size={size} onDrop={droppedImage => setProductImage(number, droppedImage)}>
                {src && src.length > 0 ? <Image src={src} size={size || '100%'} /> : <AddImage />}
            </Dropzone>
        </SquareWrapper>
    )
}
