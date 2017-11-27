import Wrapper from '../atoms/Wrapper'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import Button from '../atoms/Button'
import Modal from '../molecules/Modal'
import Image from '../atoms/Image'
import DropZone from '../atoms/Dropzone'

const accountNumberFormat = accountNumber => `${accountNumber.slice(0,3)}-${accountNumber.slice(3,4)}-${accountNumber.slice(4,9)}-${accountNumber.slice(9,10)}`

export default ({backgroundImage, accountNumber, accountName, bankName, savePaymentImage}) =>
<Wrapper 
    backgroundImage={backgroundImage}
    maxWidth="530px"
    width="100%"
    height="auto"  
    boxShadow="4px 4px 6px 0 rgba(0, 0, 0, 0.5)"  
    noMargin
    noBorder
    noBorderRadius
>
    {console.log('account Number = ', accountNumber)}
    <H3 color="white">{bankName}</H3>
    <H1 color="white" textShadow="2px 2px 2px rgba(0, 0, 0, 0.5)">เลขบัญชี: {accountNumberFormat(accountNumber)}</H1>
    <H3 color="white">ชื่อ {accountName}</H3>
    <Modal context={<DropZone><Image src='/static/img/bankTransfer.svg'/></DropZone>}>
        <Button background="none" textColor="white" round border="2px solid white" hoverBg="black">ส่งหลักฐานการโอน</Button>
    </Modal>
</Wrapper>