import '@glideapps/glide-data-grid/dist/index.css'
import { useEffect, useMemo, useState } from 'react'
import { Button, message } from 'antd'
import { read, utils } from 'xlsx'
import {
  DataEditor,
  GridCellKind
} from '@glideapps/glide-data-grid'
import { AllowedFileTypes, MAX_FILE_SIZE } from '../../utils/constants'
import DataTransform from '../DataTransform'
import JsonSheet from '../JsonSheet'
import { createPortal } from 'react-dom'
import { StyledFileInputButton } from './styles'
import { objWithSelectiveFields } from '../../utils'
import { useNavigate } from 'react-router-dom'

const DataImport = () => {
  const [cols, setCols] = useState([])
  const [dataRows, setDataRows] = useState()
  const [jsonContent, setJsonContent] = useState()
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [gridSelection, setGridSelection] = useState()
  const navigate = useNavigate()

  const selectedColumns = useMemo(() => {
    const columns = gridSelection?.columns.toArray()
    return columns ? columns : []
  }, [gridSelection])

  const selectColumnNames = useMemo(() => {
    if (jsonContent) {
      const columnNames = Object.keys(jsonContent[0])
      return columnNames
    } else {
      return []
    }
  }, [jsonContent])

  const selectedColumnCount = useMemo(() => {
    const columns = gridSelection?.columns.toArray()
    return columns ? columns?.length : 0
  }, [gridSelection])

  const prunedJsonContent = useMemo(() => {
    if (jsonContent && selectedColumns && selectColumnNames) {
      const arr = objWithSelectiveFields(
        jsonContent,
        selectedColumns.map(i => selectColumnNames[i])
      )
      return arr
    }
  }, [jsonContent, selectedColumns, selectColumnNames])

  const readCSVFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
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
    const columns = Object.keys(jsonContent[0])
    const columnData = columns.map(c => {
      return { title: c.toString(), width: 100 }
    })
    setCols(columnData)
    setDataRows(jsonContent.length)
  }, [jsonContent])

  const getData = ([col, row]) => {
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

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
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

  const updateCellData = (cell, newValue) => {
    const [col, row] = cell
    let oldJson = jsonContent
    oldJson[row][cols[col].title] = newValue.data
    setJsonContent(oldJson)
  }

  return (
    <>
      {!jsonContent && (
        <StyledFileInputButton
          type='file'
          name='csvFile'
          placeholder='Upload csv'
          onChange={handleFileChange}
          accept={AllowedFileTypes.toString()}
        />
      )}
      {jsonContent && (
        <Button
          onClick={() => {
            setJsonContent('')
            navigate('/import')
          }}
        >
          Reload Csv
        </Button>
      )}
      {selectedColumnCount > 0 && (
        <Button
          onClick={() => {
            setShowSaveModal(true)
          }}
        >
          Proceed with ({selectedColumnCount}) Selected columns
        </Button>
      )}
      {cols && dataRows && jsonContent && (
        <DataEditor
          columns={cols}
          rows={dataRows}
          getCellContent={getData}
          width={'100vw'}
          height={'80vh'}
          rowHeight={40}
          onCellEdited={(cell, newValue) =>
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

      <DataTransform
        visible={showSaveModal}
        handleCancel={() => setShowSaveModal(false)}
        handleOk={() => navigate('/', { state: prunedJsonContent })}
        jsonData={jsonContent}
        selectedColumns={selectedColumns}
        selectedColumnCount={selectedColumnCount}
        children={
          cols &&
          dataRows && (
            <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
              <JsonSheet jsonSource={prunedJsonContent} />
            </div>
          )
        }
      />
      {createPortal(<div id='portal'></div>, document.body)}
    </>
  )
}

export default DataImport
