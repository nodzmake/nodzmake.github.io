import { Route, Routes } from 'react-router-dom'
import App from './App'
import DataImport from './components/DataImport'
import UiKit from './UiKit'
import { ConfigProvider } from 'antd'
import { THEME_TOKENS } from './UiKit/theme'
import { ThemeProvider } from 'styled-components'
export const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/import',
    element: <DataImport />
  },
  {
    path: '/uikit',
    element: <UiKit />
  }
]

const AppRouter = () => {
  return (
    <ConfigProvider
      prefixCls='submars'
      iconPrefixCls='submarsIcon'
      theme={{
        token: { ...THEME_TOKENS }
      }}
    >
      <ThemeProvider theme={THEME_TOKENS}>
        <Routes>
          {routes.map(r => (
            <Route path={r.path} element={r.element} key={r.path} />
          ))}
        </Routes>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default AppRouter
