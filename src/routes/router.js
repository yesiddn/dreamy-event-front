import Home from '../pages/Home.js';
import MyServices from '../pages/MyServices.js';
import CreateServiceSection from '../pages/CreateService.js';
import Login from '../pages/Login.js';
import Signup from '../pages/Signup.js';
import MyEvents from '../pages/MyEvents.js';
import CreateEvent from '../pages/CreateEvent.js';
import Error404 from '../templates/error-404.js';
import Error401 from '../templates/error-401.js';
import EditEvents from '../pages/EditEvent.js';
import SignUpSupplier from '../pages/SignUpSupplier.js';
import EditServiceSection from '../templates/EditServiceSection.js';

const routes = [
  { path: '', component: Home, typeUser: 'public' },
  { path: 'log-in', component: Login, typeUser: 'public' },
  { path: 'sign-up', component: Signup, typeUser: 'public' },
  {
    path: 'sign-up-supplier',
    component: SignUpSupplier,
    typeUser: 'customer',
  },
  { path: 'my-services', component: MyServices, typeUser: 'supplier' },
  {
    path: 'create-service',
    component: CreateServiceSection,
    typeUser: 'supplier',
  },
  {
    path: 'edit-service',
    component: EditServiceSection,
    typeUser: 'supplier',
  },
  { path: 'my-events', component: MyEvents, typeUser: 'customer' },
  { path: 'new-event', component: CreateEvent, typeUser: 'customer' },
  { path: 'edit-event', component: EditEvents, typeUser: 'customer'}
];

export default function router(API, USER) {
  const path = window.location.pathname.split('/')[1];

  const route = routes.find((route) => route.path === path);

  if (!route) {
    Error404();
    return;
  }

  if (route.typeUser === 'public' || (USER && USER[route.typeUser])) {
    route.component(API, USER);
  } else {
    Error401();
  }
}
