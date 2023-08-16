import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Sheet from './components/Sheet'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/sheet',
      element: <Sheet />
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
