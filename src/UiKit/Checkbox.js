import { Checkbox as AntdCheckbox } from 'antd'
import styled from 'styled-components'

const CheckboxWrapper = styled.div`
  --size: 90px;
`

const CheckboxBlock = styled.div`
  position: relative;
  clear: both;
  float: left;
`

const CheckboxLabel = styled.label`
  width: var(--size);
  height: calc(var(--size) / 2);
  box-sizing: border-box;
  border: 3px solid;
  float: left;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;
  color: black;

  &:before {
    transition: 0.3s ease;
    content: '';
    width: calc((var(--size) / 2) - 10px);
    height: calc((var(--size) / 2) - 10px);
    position: absolute;
    background: white;
    left: 2px;
    top: 2px;
    box-sizing: border-box;
    border: 3px solid;
    color: black;
    border-radius: 100px;
  }
`
const StyledCheckboxInput = styled(AntdCheckbox)`
  display: none;
  visibility: hidden;

  &:checked + label {
    background: #55e868;
  }
  &:checked + label:before {
    left: calc(var(--size) / 2);
  }
`

const Checkbox = () => {
  return (
    <CheckboxWrapper>
      <CheckboxBlock>
        <StyledCheckboxInput></StyledCheckboxInput>
        <CheckboxLabel />
      </CheckboxBlock>
    </CheckboxWrapper>
  )
}

export default Checkbox
