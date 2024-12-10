import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Services } from './pages/services/services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/services',
    element: <Services />,
  },
])
