import React from 'react'
import Button, { DivButton } from '../atoms/Button'
import H5 from '../atoms/H5'
import Modal from '../molecules/Modal'
import InputText from '../atoms/TextField'

export default ({ sponsorEmail, productKey, setProductSponsor }) => 
<Modal context={
        <div>
            <H5 lineHeight="32px" center>ใส่ email ของคนที่ต้องการให้เป็นผู้แนะนำ</H5>
            <InputText noGrid name="sponsorEmail" width="100%"/>
            <Button fullWidth onClick={() => setProductSponsor(productKey, sponsorEmail)} >เพิ่ม</Button>
        </div>}>
    <Button onClick={() => console.log('add sponsor!!!!')}>Add</Button>
</Modal>