import { Collapse, Slider, Button } from 'antd'
import styled from 'styled-components'

const StyledInput = styled.input`
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  --vh: 7.3px;
  --chakra-ui-color-mode: dark;
  box-sizing: border-box;
  overflow-wrap: break-word;
  font-family: inherit;
  margin: 0px;
  overflow: visible;
  padding: 0px;
  width: 100%;
  outline: 0px;
  position: relative;
  appearance: none;
  transition: all 0.2s ease 0s;
  font-weight: 600;
  font-size: 0.875rem;
  padding-left: 2.25rem;
  padding-right: 0.875rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  line-height: calc(1em + 0.125rem);
  border: 0.125rem solid transparent;
  background: rgb(66, 66, 66);
  color: rgb(255, 255, 255);

  &:active {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    --vh: 7.3px;
    --chakra-ui-color-mode: dark;
    box-sizing: border-box;
    overflow-wrap: break-word;
    font-family: inherit;
    margin: 0px;
    overflow: visible;
    padding: 0px;
    width: 100%;
    outline: 0px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 2.25rem;
    padding-right: 0.875rem;
    height: 2.25rem;
    border-radius: 0.5rem;
    line-height: calc(1em + 0.125rem);
    border: 0.125rem solid transparent;
    background: rgb(48, 48, 48);
    color: rgb(255, 255, 255);
  }

  &:hover {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    --vh: 7.3px;
    --chakra-ui-color-mode: dark;
    box-sizing: border-box;
    overflow-wrap: break-word;
    font-family: inherit;
    margin: 0px;
    overflow: visible;
    padding: 0px;
    width: 100%;
    outline: 0px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    font-weight: 600;
    font-size: 0.875rem;
    padding-left: 2.25rem;
    padding-right: 0.875rem;
    height: 2.25rem;
    border-radius: 0.5rem;
    line-height: calc(1em + 0.125rem);
    border: 0.125rem solid transparent;
    background: rgb(66, 66, 66);
    color: rgb(255, 255, 255);
    background-color: rgb(48,48,48);
  }
`

const StyledCollapse = styled(Collapse)`
  .ant-collapse {
    color: #fff;
  }

  .ant-collapse-item {
    border-bottom: 0.01px solid #494949;
  }

  .ant-motion-collapse {
    transition: height 0.005s !important;
  }

  .ant-collapse-expand-icon {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    --vh: 7.3px;
    border-width: 0px;
    border-style: solid;
    box-sizing: border-box;
    border-color: rgba(255, 255, 255, 0.125);
    overflow-wrap: break-word;
    font-family: inherit;
    margin: 0px;
    overflow: visible;
    text-transform: none;
    background: transparent;
    cursor: pointer;
    line-height: inherit;
    color: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 2.5rem;
    transition: all 0.2s;
    outline: 0;
    font-size: 1rem;
    margin-right: 0.375rem;
    height: 2.5rem;
    border-radius: 9999px;
    padding: 0;
    -webkit-box-pack: center;
    justify-content: center;
    margin-inline-start: 0.5rem;
    margin-top: 0;
    color: #494949;
  }

  .ant-collapse-expand-icon {
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-sizing: border-box;
    overflow-wrap: break-word;
    font-family: inherit;
    margin: 0px;
    text-transform: none;
    cursor: pointer;
    line-height: inherit;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    outline: 1;
    font-size: 1rem;
    padding: 0;
    align-items: center;
    color: #715df2;
    background: #242424;
    background: #fcb500;
    height:100px;
    &:hover{
      border-width: 2px;
    }
  }

  .ant-collapse-header .ant-collapse-expand-icon {
    height: 50px;
  }

  .ant-collapse-item {
    color: #fff;
  }

  .ant-collapse-header {
    color: #fff;
  }

  .ant-collapse-content-box {
    color: #fff;
  }

  .ant-collapse-header-text {
    color: #fff;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    --vh: 7.3px;
    --chakra-ui-color-mode: dark;
    font-feature-settings: 'kern';
    color: rgba(255, 255, 255, 0.89);
    border-width: 0px;
    border-style: solid;
    box-sizing: border-box;
    border-color: rgba(255, 255, 255, 0.125);
    overflow-wrap: break-word;
    margin: 0px;
    font-family: 'Mntsrt', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.03125rem;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ant-collapse-content {
  }
`

const CanvasSettings = ({ bColor }: any) => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`
  const items = [
    {
      key: '1',
      label: 'Canvas',
      children: (
        <>
          <Button>submit</Button>
          <Slider min={0} max={100} defaultValue={50} step={2}></Slider>
        </>
      )
    },
    {
      key: '2',
      label: 'Direction',
      children: <StyledInput></StyledInput>
    },
    {
      key: '3',
      label: 'Ground',
      children: <p>{text}</p>
    },
    {
      key: '4',
      label: 'Sky',
      children: <p>{text}</p>
    },
    {
      key: '5',
      label: 'Texture',
      children: <p>{text}</p>
    },
    {
      key: '6',
      label: 'Color',
      children: <p>{text}</p>
    }
  ]
  return (
    <StyledCollapse
      items={items}
      defaultActiveKey={['1']}
      onChange={e => console.log({ e })}
      bordered={false}
      expandIconPosition={'end'}
      style={{ backgroundColor: bColor }}
    />
  )
}

export default CanvasSettings
