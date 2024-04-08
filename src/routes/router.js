import Home from "../pages/Home";
import CreateService from "../pages/CreateService.js";

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component:  CreateService},
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}