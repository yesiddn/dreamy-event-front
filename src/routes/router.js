import Home from "../pages/Home";
import editServiceForm from "../templates/EditServices.js";

const routes = [
  { path: '/', component: Home },
  { path: '/edit-service', component: editServiceForm },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}