import { Route, Routes } from 'react-router-dom'
import App from './App'
import Splash from './components/Splash'
import NodzMakeSvg from './components/Splash/nodzmake'
import { PLANET_MARS_COLORS } from './utils/theme'
import DataImport from './components/DataImport'

export const routes = [
  {
    path: '/',
    element: (
      <Splash image={<NodzMakeSvg fill={PLANET_MARS_COLORS['@color4']} />}>
        <App />
      </Splash>
    )
  },
  {
    path: '/import',
    element: (
      <Splash image={<NodzMakeSvg fill={PLANET_MARS_COLORS['@color3']} />}>
        <DataImport />
      </Splash>
    )
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
