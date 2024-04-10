import Home from '../pages/Home.js';
import CreateServiceSection from '../pages/CreateService.js';
import SignUpCustomerForm from '../templates/sign-up-customer-form.js';

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/sign-up', component: SignUpCustomerForm },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
