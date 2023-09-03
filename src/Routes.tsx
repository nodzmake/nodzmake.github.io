import { Route, Routes } from 'react-router-dom'
import App from './App'
import Sheet from './components/Sheet'
import Glider from './components/Glider'
import DataImport from './components/DataImport'

export const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/sheet',
    element: <Sheet />
  },
  {
    path: '/glider',
    element: <Glider />
  },
  {
    path: '/import',
    element: <DataImport />
  }
]

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(r => (
        <Route path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}

export default AppRouter
