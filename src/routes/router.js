import Home from '../pages/Home.js';
import MyServices from "../pages/MyServices.js";
import CreateServiceSection from '../pages/CreateService.js';
import editServiceForm from "../templates/EditServices.js";
import LoginForm from '../templates/login-form.js';
import CreateUser from '../pages/CreateUser.js';
import NewEventForm from '../templates/new-event-form.js';
import SignUpCustomerForm from '../templates/sign-up-customer-form.js';

const routes = [
  { path: '/', component: Home },
  { path: '/login-form', component: LoginForm },
  { path: '/my-services', component: MyServices },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/edit-service', component: editServiceForm },
  { path: '/create-user', component: CreateUser},
  { path: '/new-event', component: NewEventForm },
  { path: '/sign-up', component: SignUpCustomerForm },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
