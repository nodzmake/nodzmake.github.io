import { Slider, Button, InputNumber, ColorPicker, Radio } from 'antd'
import { skyEnvironments } from '../Babylon/Utils'
import { StyledCollapse, StyledInput, StyledRadio } from './styles'

const CanvasSettings = ({ bColor, settings, setSettings }) => {
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
        <div style={{ overflow: 'scroll', height: '300px' }}>
          <Radio.Group>
            {Object.keys(skyEnvironments).map(option => (
              <StyledRadio key={option} value={option}>
                <img src='https://picsum.photos/90/90' alt='weather-icon' />
                {option}
              </StyledRadio>
            ))}
          </Radio.Group>
        </div>
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
      children: (
        <ColorPicker
          format='HEX'
          size='large'
          showText
          onChange={val => {
            setSettings({ ...settings, color: val.metaColor.originalInput })
          }}
        />
      )
    }
  ]
  return (
    <StyledCollapse
      items={items}
      defaultActiveKey={['1', '2', '3', '5', '6']}
      onChange={e => console.log({ e })}
      bordered={false}
      expandIconPosition={'end'}
      style={{ backgroundColor: bColor }}
    />
  )
}

export default CanvasSettings
