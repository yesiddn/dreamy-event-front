import Home from '../pages/Home.js';
import CreateServiceSection from '../pages/CreateService.js';
import SignUpSupplierForm from '../templates/sign-up-supplier-form.js';
const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/sign-up-supplier', component:SignUpSupplierForm  },
  
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
