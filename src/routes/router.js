import Home from "../pages/Home";
import MyServices from "../pages/MyServices.js";


const routes = [
  { path: '/', component: Home },
  { path: '/my-services', component: MyServices },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}