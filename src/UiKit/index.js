import Button from './Button'
import Card from './Card'
import Checkbox from './Checkbox'
import Divider from './Divider'
import H1 from './H1'
import Input from './Input'

const UiKit = () => {
  return (
    <>
      <H1>Buttons</H1>
      <Button onClick={e => console.log({ e })}>Create</Button>
      <H1>Checkbox</H1>
      <Checkbox></Checkbox>
      <Divider />
      <H1>Inputs</H1>
      <Input></Input>
      <H1>Card</H1>
      <Card>Card</Card>
    </>
  )
}

export default UiKit
