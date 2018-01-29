import { Grid } from 'semantic-ui-react'
import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'
import Modal from '../molecules/Modal'
import Image from '../atoms/Image'
import DropZone from '../atoms/Dropzone'

const accountNumberFormat = accountNumber => `${accountNumber.slice(0,3)}-${accountNumber.slice(3,4)}-${accountNumber.slice(4,9)}-${accountNumber.slice(9,10)}`

export default ({backgroundColor, accountNumber, accountName, bankName, bankNameEng, savePaymentImage, addPayment, imageUpload, logo}) =>
<Wrapper 
    backgroundColor={backgroundColor}
    maxWidth="530px"
    width="-webkit-fill-available"
    height="auto"  
    noMargin
    noBorder
    noBorderRadius
    position="relative"
>
    <H3 color="white">{bankName}</H3>
    <img style={{width:'80px', height:'80px', position:'absolute', top:'0', right:'0'}} src={logo || ""} alt="bank image" />
    <H3 color="white" zIndex="10">{accountNumberFormat(accountNumber)}</H3>
    <H3 color="white">ชื่อ {accountName}</H3>
    <Modal context={
			<DropZone onDrop={savePaymentImage} size="100%" marginTop="15px">
                <Wrapper centerAll>
							<img style={{width:'100%'}} src='/static/img/bankTransfer.svg'/>
							<img alt="" src={imageUpload}  />
                </Wrapper>
			</DropZone>}>
        <Button background="none" textColor="white" border="2px solid white" hoverBg="black" onClick={() => addPayment('bankTransfer', bankNameEng)}>ส่งหลักฐานการโอน</Button>
    </Modal>
</Wrapper>
