import { About, Temporary } from '../pages';

export const baseUrl = {about: '/about', temporary: '/temporary'}

const baseRouters = [
  {
    path: baseUrl.about,
    component: About,
    root: []
  },
  {
    path: baseUrl.temporary,
    component: Temporary,
    root: []
  }
]

export default baseRouters