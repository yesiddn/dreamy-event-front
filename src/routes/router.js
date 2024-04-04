import Home from "../pages/Home";
import SupplierEventList from "../pages/SupplierEventList.js";


const routes = [
  { path: '/', component: Home },
  { path: '/hola', component: SupplierEventList },
];

export default function router(API) {
  const path = window.location.pathname;

  const route = routes.find((route) => route.path === path);

  if (route) {
    route.component(API);
  }
}