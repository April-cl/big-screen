import { About } from '../pages';

export const baseUrl = {about: '/about'}

const baseRouters = [
  {
    path: baseUrl.about,
    component: About,
    root: []
  }
]

export default baseRouters