import Home from '../pages/Home.js';
import MyServices from '../pages/MyServices.js';
import CreateServiceSection from '../pages/CreateService.js';
import editServiceForm from '../templates/EditServices.js';
import Login from '../pages/Login.js';
import SignUpSupplierForm from '../templates/sign-up-supplier-form.js';
import Signup from '../pages/Signup.js';
import MyEvents from '../pages/MyEvents.js';
import CreateEvent from '../pages/CreateEvent.js';
import Alert from '../templates/Alert.js';
import Error404 from '../templates/error-404.js';
import EditEvents from '../pages/EditEvent.js';
import UserProfile from '../pages/UserProfile.js';

const routes = [
  { path: '', component: Home, typeUser: 'public' },
  { path: 'log-in', component: Login, typeUser: 'public' },
  { path: 'sign-up', component: Signup, typeUser: 'public' },
  { path: 'sign-up-supplier', component: SignUpSupplierForm, typeUser: 'customer', },
  { path: 'my-services', component: MyServices, typeUser: 'supplier' },
  { path: 'create-service', component: CreateServiceSection, typeUser: 'supplier', },
  { path: 'edit-service', component: editServiceForm, typeUser: 'supplier', },
  { path: 'my-events', component: MyEvents, typeUser: 'customer' },
  { path: 'new-event', component: CreateEvent, typeUser: 'customer' },
  { path: 'edit-event', component: EditEvents, typeUser: 'customer' },
  { path: 'profile', component: UserProfile, typeUser: 'customer' }

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
    Alert('unauthorized-access', '/');
  }
}
