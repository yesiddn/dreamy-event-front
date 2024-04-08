import Home from '../pages/Home.js';
import CreateService from '../pages/CreateService.js';
import CreateUser from '../pages/CreateUser.js'

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component: CreateService},
  { path: '/create-user', component: CreateUser}
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
