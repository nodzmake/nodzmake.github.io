import {
  Collapse,
  Slider,
  Button,
  Segmented,
  InputNumber,
  ColorPicker
} from 'antd'
import styled from 'styled-components'

const StyledInput = styled.input`
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  --vh: 7.3px;
  --chakra-ui-color-mode: dark;
  box-sizing: border-box;
  overflow-wrap: break-word;
  font-family: inherit;
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
    background-color: rgb(48, 48, 48);
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
  .ant-collapse-header .ant-collapse-arrow{
    font-size: 1rem!important;
    padding-right:2.5px;
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
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.2s;
    outline: 0;
    font-size: 1rem;
    margin-right: 0.375rem;
    border-radius: 9999px;
    padding: 0;
    -webkit-box-pack: center;
    justify-content: center;
    margin-inline-start: 0.5rem;
    margin-top: 0;
    color: #494949;
    background-color:#202020;
    &:hover{
      background-color:#303030;
    }
  }

  .ant-collapse-header .ant-collapse-expand-icon {
    justify-content:end;
  }

  .ant-collapse-item {
    border-bottom: 1px solid #303030;
  }

  .ant-collapse-header {
    color: #fff;
    padding-inline-start: 2px;
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
      children: (
        <>
          <StyledInput></StyledInput>
        </>
      )
    },
    {
      key: '3',
      label: 'Ground',
      children: (
        <>
          <Slider defaultValue={50}></Slider>
          <Slider defaultValue={80}></Slider>
          <Slider defaultValue={10}></Slider>
          <Slider defaultValue={40}></Slider>
        </>
      )
    },
    {
      key: '4',
      label: 'Sky',
      children: (
        <Segmented
          options={[
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Spring</div>
                  <div>Jan-Mar</div>
                </div>
              ),
              value: 'spring'
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Summer</div>
                  <div>Apr-Jun</div>
                </div>
              ),
              value: 'summer'
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Autumn</div>
                  <div>Jul-Sept</div>
                </div>
              ),
              value: 'autumn'
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <div>Winter</div>
                  <div>Oct-Dec</div>
                </div>
              ),
              value: 'winter'
            }
          ]}
        />
      )
    },
    {
      key: '5',
      label: 'Texture',
      children: (
        <InputNumber
          size='large'
          min={1}
          max={100000}
          defaultValue={3}
          onChange={n => console.log({ n })}
        />
      )
    },
    {
      key: '6',
      label: 'Color',
      children: <ColorPicker size='large' showText />
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
