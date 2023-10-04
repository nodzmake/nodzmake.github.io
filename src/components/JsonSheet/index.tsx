import { useEffect, useState } from 'react'
import {
  DataEditor,
  GridCellKind,
  GridCell,
  Item,
  SizedGridColumn,
  GridSelection
} from '@glideapps/glide-data-grid'

type JsonSheetProps = {
  jsonSource: any
}

const JsonSheet = ({ jsonSource }: JsonSheetProps) => {
  const [cols, setCols] = useState<SizedGridColumn[]>([])
  const [dataRows, setDataRows] = useState<any>()
  const [gridSelection, setGridSelection] = useState<GridSelection>()

  useEffect(() => {
    if (!jsonSource) return
    const columns = Object.keys(jsonSource[0] as any)
    const columnData = columns.map(c => {
      return { title: c.toString(), width: 100 }
    })
    setCols(columnData)
    setDataRows(jsonSource.length)
  }, [jsonSource])

  const getData = ([col, row]: Item): GridCell => {
    const record = jsonSource[row]
    const content =
      cols[col].title && record[cols[col].title]
        ? record[cols[col].title].toString()
        : ''
    return {
      kind: GridCellKind.Text,
      data: content,
      allowOverlay: false,
      displayData: content
    }
  }

  return (
    <>
      {cols && dataRows && (
        <DataEditor
          columns={cols}
          rows={dataRows}
          getCellContent={getData}
          width={'100vw'}
          height={'80vh'}
          rowHeight={40}
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
    </>
  )
}

export default JsonSheet
