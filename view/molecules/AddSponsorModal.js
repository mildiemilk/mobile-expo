import React from 'react'
import Button, { DivButton } from '../atoms/Button'
import H5 from '../atoms/H5'
import Modal from '../molecules/Modal'
import Wrapper from '../atoms/Wrapper'
import InputText from '../atoms/TextField'
import Flex from '../atoms/Flex'

export default ({ sponsorEmail }) => 
<Flex direction="row" verticleCenter >
    <H5 margin="0px 10px 0px 0px" lineHeight="32px">Number of distributor: </H5>
    <Modal context={
            <div>
                <H5 lineHeight="32px" center>ใส่ email ของคนที่ต้องการให้เป็นผู้แนะนำ</H5>
                <InputText noGrid name="sponsorEmail" width="100%"/>
                <Button fullWidth onClick={() => console.log('add sponsor modal!!!!', sponsorEmail)} >เพิ่ม</Button>
            </div>}>
        <Button round maxWidth="76px" onClick={() => console.log('add sponsor!!!!')}>Add</Button>
    </Modal>
</Flex>