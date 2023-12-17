import styled from 'styled-components'
import Input from '../../UiKit/Input'

export const StyledFileInputButton = styled(Input)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::after {
    content: 'Select CSV file';
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 3px dashed #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
    height: 80vh;
    width: 100%;
    font-size: 1.5rem;
  }
  &:hover::after {
    border: 3px dashed #c4c4c4;
  }
  &::file-selector-button {
    width: 50%;
    height: 50%;
    background: #e9e9e9;
    font-weight: bold;
    color: dodgerblue;
    padding: 0.5em;
    padding: 12px 16px;
    border-radius: 3px;
    background: #65829c;
    color: #fff;
  }
`
