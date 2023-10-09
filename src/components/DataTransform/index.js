import { StyledModal } from './styles'


const DataTransform = ({
  visible,
  handleCancel,
  handleOk,
  jsonData,
  selectedColumnCount,
  children
}) => {

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
