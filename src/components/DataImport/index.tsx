import { useEffect, useState } from 'react'
import { Input } from 'antd'
import { read, utils } from 'xlsx'
import {
  DataEditor,
  GridColumn,
  GridCellKind,
  GridCell,
  Item
} from '@glideapps/glide-data-grid'
import { AllowedFileTypes } from '../../utils/constants'

const DataImport = () => {
  const [cols, setCols] = useState<GridColumn[]>([])
  const [dataRows, setDataRows] = useState<any>()
  const [jsonContent, setJsonContent] = useState<any>()

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
    const colms = Object.keys(jsonContent[0] as any)
    const gfx = colms.map(c => {
      return { title: c.toString(), width: 100 }
    })
    setCols(gfx)
    setDataRows(jsonContent.length)
  }, [jsonContent])

  const getData = ([col, row]: Item): GridCell => {
    const record = jsonContent[row]
    const content =
      cols[col].title && record[cols[col].title]
        ? record[cols[col].title].toString()
        : 'nill'
    return {
      kind: GridCellKind.Text,
      data: content,
      allowOverlay: false,
      displayData: content
    }
  }

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]
    if (file) {
      readCSVFile(file)
    }
  }

  return (
    <>
      <Input
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
          width={'750px'}
          height={'750px'}
        />
      )}
    </>
  )
}

export default DataImport
