import Home from '../pages/Home.js';
import CreateServiceSection from '../pages/CreateService.js';
import NewEventForm from '../templates/new-event-form.js';

const routes = [
  { path: '/', component: Home },
  { path: '/create-service', component: CreateServiceSection },
  { path: '/new-event', component: NewEventForm },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}
