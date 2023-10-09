import { Route, Routes } from 'react-router-dom'
import App from './App'
import DataImport from './components/DataImport'

export const routes = [
  {
    path: '/',
    element: <App />
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
        <Route path={r.path} element={r.element} key={r.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
