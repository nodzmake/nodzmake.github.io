import { Route, Routes } from 'react-router-dom'
import App from './App'
import Sheet from './components/Sheet'
import Glider from './components/Glider'
import Splash from './components/Splash'
import NodzMakeSvg from './components/Splash/nodzmake'
import COLORS from './utils/theme'

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
    path: '/sheet',
    element: (
      <Splash image={<NodzMakeSvg fill={COLORS['@primary-color']} />}>
        <Sheet />
      </Splash>
    )
  },
  {
    path: '/glider',
    element: (
      <Splash image={<NodzMakeSvg fill={COLORS['@primary-color']} />}>
        <Glider />
      </Splash>
    )
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
