import Home from '../pages/Home.js';
import MyServices from '../pages/MyServices.js';
import CreateServiceSection from '../pages/CreateService.js';
import editServiceForm from '../templates/EditServices.js';
import CreateUser from '../pages/CreateUser.js';
import Login from '../pages/Login.js';
import SignUpSupplierForm from '../templates/sign-up-supplier-form.js';
import Signup from '../pages/Signup.js';
import MyEvents from '../pages/MyEvents.js';
import CreateEvent from '../pages/CreateEvent.js'; 

const routes = [
  { path: '/', component: Home },
  { path: '/log-in', component: Login },
  { path: '/my-services', component: MyServices },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/edit-service', component: editServiceForm },
  { path: '/create-user', component: CreateUser },
  { path: '/sign-up', component: Signup },
  { path: '/sign-up-supplier', component: SignUpSupplierForm },
  { path: '/my-events', component:MyEvents },
  { path: '/new-event', component: CreateEvent },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
