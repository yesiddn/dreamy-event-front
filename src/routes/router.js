import Home from '../pages/Home.js';
import MyServices from "../pages/MyServices.js";
import CreateServiceSection from '../pages/CreateService.js';
import editServiceForm from "../templates/EditServices.js";
import CreateUser from '../pages/CreateUser.js';
import Login from '../pages/Login.js';
import CreateEvent from '../pages/CreateEvent.js'; 
import SignUpCustomerForm from '../templates/sign-up-customer-form.js';
import SignUpSupplierForm from '../templates/sign-up-supplier-form.js';
import MyEvents from '../pages/MyEvents.js';

const routes = [
  { path: '/', component: Home },
  { path: '/log-in', component: Login },
  { path: '/my-services', component: MyServices },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/edit-service', component: editServiceForm },
  { path: '/create-user', component: CreateUser},
  { path: '/new-event', component: CreateEvent },
  { path: '/sign-up', component: SignUpCustomerForm },
  { path: '/sign-up-supplier', component:SignUpSupplierForm  },
  { path: '/my-events', component:MyEvents }
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
