import { Route, Routes } from 'react-router-dom'
import App from './App'
import Splash from './components/Splash'
import NodzMakeSvg from './components/Splash/nodzmake'
import COLORS from './utils/theme'
import DataImport from './components/DataImport'

export const routes = [
  {
    path: '/',
    element: (
      <Splash image={<NodzMakeSvg fill={COLORS['@primary-color']} />}>
        <App />
      </Splash>
    )
  },
  {
    path: '/import',
    element: (
      <Splash image={<NodzMakeSvg fill={COLORS['@primary-color']} />}>
        <DataImport />
      </Splash>
    )
  }
]

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(r => (
        <Route path={r.path} element={r.element} key={r.path}/>
      ))}
    </Routes>
  )
}

export default AppRouter
