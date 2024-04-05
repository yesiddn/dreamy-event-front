import Home from '../pages/Home.js';
import MyServices from "../pages/MyServices.js";
import CreateServiceSection from '../pages/CreateService.js';
import LoginForm from '../templates/login-form.js';

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/my-services', component: MyServices },
  { path: '/login-form', component: LoginForm },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
