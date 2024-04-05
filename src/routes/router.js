import Home from "../pages/Home";
import CreateService from "../pages/CreateService.js";
import hola from "../templates/alert.js";

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component:  CreateService},
  {path: '/alerts', component: hola},
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}