import { Dropdown } from 'semantic-ui-react'

const setVariety = varieties => varieties.map(variety => ({
    value: variety,
    text: variety
}))

export default props => <Dropdown onChange={(event,data)=>props.addVariety(data.value)} placeholder="เลือกแบบ" selection  options={setVariety(props.varieties)} />