import { Collapse } from 'antd'
import styled from 'styled-components'

const StyledCollapse = styled(Collapse)`
  .ant-collapse {
    color: #fff;
  }
  
  .ant-collapse-item {
    border-bottom: 0.01px solid #494949;
  }

  .ant-collapse-expand-icon { 
    color:#494949
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
      label: 'Color',
      children: <>
        <button>submit</button>
      </>
    },
    {
      key: '2',
      label: 'Direction',
      children: <p>{text}</p>
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
    }
  ]
  return (
    <StyledCollapse
      items={items}
      defaultActiveKey={['1']}
      onChange={e => console.log({ e })}
      bordered={false}
      style={{ backgroundColor: bColor }}
    />
  )
}

export default CanvasSettings
