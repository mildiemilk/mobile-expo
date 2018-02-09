import React from 'react'
import Button, { DivButton } from '../atoms/Button'
import H5 from '../atoms/H5'
import Modal from '../molecules/Modal'
import InputText from '../atoms/TextField'
import ErrorDisplay from '../organisms/ErrorDisplay'

export default ({ sponsorEmail, productKey, setProductSponsor, sponsors, handleChangeStatus, status, statusEmail, displayText, isEmailExist }) => {
return (<Modal context={
        <div>
            <H5 lineHeight="32px" center>ใส่ email ของคนที่ต้องการให้เป็นผู้แนะนำ</H5>
            <InputText noGrid name="sponsorEmail" width="100%"/>
            <ErrorDisplay status={statusEmail} displayText={displayText} />	
            <Button fullWidth buttonDisabled={isEmailExist || statusEmail === 'error' || !sponsorEmail } onClick={() => {
                    if(!isEmailExist && statusEmail !== 'error' && sponsorEmail ) {
                        setProductSponsor(productKey, sponsorEmail)
                        handleChangeStatus()
                    }
                }} >เพิ่ม</Button>
            { status ? <H5 lineHeight="32px" color="green" center>เพิ่ม {sponsorEmail} สำเร็จ</H5> : null}
            { Object.keys(sponsors).length !== 0 ? <H5 lineHeight="32px">email ของผู้แนะนำ</H5> : null}
            { sponsors ? 
				Object.keys(sponsors).map( sponsorKey => {
					return <H5 lineHeight="20px">{sponsors[sponsorKey].email}</H5>
				}) : null}
        </div>}>
    <Button fullWidth>Add</Button>
</Modal>)
}