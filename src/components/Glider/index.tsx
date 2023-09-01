import '@glideapps/glide-data-grid/dist/index.css'

import {
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
  Item
} from '@glideapps/glide-data-grid'

const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: '89',
    points: '1334',
    wins: '45'
  },
  {
    firstName: 'Maria',
    lastName: 'Garcia',
    age: '89',
    points: '1334',
    wins: '45'
  },
  {
    firstName: 'Nancy',
    lastName: 'Jones',
    age: '89',
    points: '1334',
    wins: '45'
  },
  {
    firstName: 'James',
    lastName: 'Smith',
    age: '89',
    points: '1334',
    wins: '45'
  }
]

const columns: GridColumn[] = [
  { title: 'First Name', width: 100 },
  { title: 'Last Name', width: 100 },
  { title: 'Age', width: 100 },
  { title: 'Points', width: 100 },
  { title: 'Wins', width: 100 }
]

function getData ([col, row]: Item): GridCell {
  const person = data[row]

  if (col === 0) {
    return {
      kind: GridCellKind.Text,
      data: person.firstName,
      allowOverlay: false,
      displayData: person.firstName
    }
  } else if (col === 1) {
    return {
      kind: GridCellKind.Text,
      data: person.lastName,
      allowOverlay: false,
      displayData: person.lastName
    }
  }else if (col === 2) {
    return {
      kind: GridCellKind.Text,
      data: person.age,
      allowOverlay: false,
      displayData: person.age
    }
  }else if (col === 3) {
    return {
      kind: GridCellKind.Text,
      data: person.points,
      allowOverlay: false,
      displayData: person.points
    }
  }else if (col === 4) {
    return {
      kind: GridCellKind.Text,
      data: person.wins,
      allowOverlay: false,
      displayData: person.wins
    }
  } else {
    throw new Error()
  }
}

const Glider = () => {
  return (
    <DataEditor columns={columns} getCellContent={getData} rows={data.length} />
  )
}

export default Glider
