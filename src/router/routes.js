import { routes as dashboard } from '../modules/dashboard/index'
import { routes as auth } from '../modules/auth/index'

const root = [
  { path: '/', redirect: '/dashboard' }
]

export default [ ...root, ...dashboard, ...auth ]
