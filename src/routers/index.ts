import { Home } from '../pages';
import baseRouters from './base';

export type RouterType = {
  path: string,
  component: React.LazyExoticComponent<any>,
  root: string[],
  notExect?: boolean
}

const HomeRouter: RouterType = {
  path: '/home',
  component: Home,
  root: []
};

const Routers: RouterType[] = ([
  HomeRouter,
  ...baseRouters
]);

export {
  Routers
};