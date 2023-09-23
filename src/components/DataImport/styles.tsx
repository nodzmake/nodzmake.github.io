import { Input } from 'antd'
import styled from 'styled-components'

export const StyledFileInputButton = styled(Input)`
  &::file-selector-button {
    width: 50%;
    height: 50%;
    background: #e9e9e9;
    font-weight: bold;
    color: dodgerblue;
    padding: 0.5em;
    border: thin solid grey;
    border-radius: 3px;
    color: red;
  }
`
