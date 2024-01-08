import { Button as AntdButton } from 'antd'
import styled from 'styled-components'
const prefixCls = process.env.REACT_APP_CSS_PREFIX_CLASS

const Button = styled(AntdButton)`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  min-width: 100px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
  .${prefixCls}-wave {
    display: none;
  }
`

export default Button
