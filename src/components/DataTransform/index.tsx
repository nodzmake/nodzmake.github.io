import { StyledModal } from './styles'

type props = {
  visible: boolean
  jsonData: any
  selectedColumnCount?: number
  selectedColumns: Array<number>
  handleCancel: () => void
  handleOk: () => void
  children: any
}

const DataTransform = ({
  visible,
  handleCancel,
  handleOk,
  jsonData,
  selectedColumnCount,
  children
}: props) => {

  return (
    <StyledModal
      closable
      open={visible}
      onCancel={handleCancel}
      onOk={handleOk}
      width={'90vw'}
    >
      Clean your data here...
      <div>{selectedColumnCount}</div>
      {children}
    </StyledModal>
  )
}

export default DataTransform
