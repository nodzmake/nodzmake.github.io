import '@glideapps/glide-data-grid/dist/index.css'
import { useEffect, useMemo, useState } from 'react'
import { Button, message } from 'antd'
import { read, utils } from 'xlsx'
import {
  DataEditor,
  GridCellKind,
  GridCell,
  Item,
  SizedGridColumn,
  GridSelection,
  EditableGridCell
} from '@glideapps/glide-data-grid'
import { AllowedFileTypes } from '../../utils/constants'
import { createPortal } from 'react-dom'
import { StyledFileInputButton } from './styles'

const DataImport = () => {
  const [cols, setCols] = useState<SizedGridColumn[]>([])
  const [dataRows, setDataRows] = useState<any>()
  const [jsonContent, setJsonContent] = useState<any>()
  const [gridSelection, setGridSelection] = useState<GridSelection>()

  const readCSVFile = (file: any) => {
    const reader = new FileReader()
    reader.onload = (e: any) => {
      const data = e.target.result
      const workbook = read(data, { type: 'binary' })
      const sheetName = workbook.SheetNames[0]
      const sheet = workbook.Sheets[sheetName]
      const jsonData = utils.sheet_to_json(sheet)
      setJsonContent(jsonData)
    }
    reader.readAsBinaryString(file)
  }

  useEffect(() => {
    if (!jsonContent) return
    const columns = Object.keys(jsonContent[0] as any)
    const columnData = columns.map(c => {
      return { title: c.toString(), width: 100 }
    })
    setCols(columnData)
    setDataRows(jsonContent.length)
  }, [jsonContent])

  const getData = ([col, row]: Item): EditableGridCell => {
    const record = jsonContent[row]
    try {
      const content =
        cols[col].title && record[cols[col].title]
          ? record[cols[col].title].toString()
          : ''
      return {
        kind: GridCellKind.Text,
        data: content,
        allowOverlay: true,
        displayData: content,
        readonly: false
      }
    } catch (err) {
      const content = '$err'
      return {
        kind: GridCellKind.Text,
        data: content,
        allowOverlay: true,
        displayData: content,
        readonly: false
      }
    }
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > 1000000) {
        message.warning(
          `File size ${(file.size / 1000000).toFixed(
            1
          )} mb exceeded limit 1 mb`,
          3
        )
        return
      }
      readCSVFile(file)
    }
  }

  const updateCellData = (cell: Item, newValue: any) => {
    const [col, row] = cell
    let oldJson = jsonContent
    oldJson[row][cols[col].title] = newValue.data
    setJsonContent(oldJson)
  }

  return (
    <>
      <StyledFileInputButton
        type='file'
        name='csvFile'
        placeholder='Upload csv'
        onChange={handleFileChange}
        accept={AllowedFileTypes.toString()}
      />
      {cols && dataRows && (
        <DataEditor
          columns={cols}
          rows={dataRows}
          getCellContent={getData}
          width={'100vw'}
          height={'80vh'}
          rowHeight={40}
          onCellEdited={(cell: Item, newValue: EditableGridCell) =>
            updateCellData(cell, newValue)
          }
          maxColumnAutoWidth={900}
          maxColumnWidth={900}
          onColumnResizeEnd={(column, newSizeWithGrow) => {
            const newCols = cols.map(c =>
              c.title === column.title
                ? { title: c.title, width: newSizeWithGrow }
                : c
            )
            setCols(newCols)
          }}
          gridSelection={gridSelection}
          onGridSelectionChange={e => {
            setGridSelection(e)
          }}
          columnSelect='multi'
        />
      )}
      {createPortal(<div id='portal'></div>, document.body)}
    </>
  )
}

export default DataImport
