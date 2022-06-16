// import RestoList from '../views/pages/resto-list';
// import Detail from '../views/pages/detail';
// import Like from '../views/pages/like';

import HomeCatalogue from "../views/pages/home";
import CarList from "../views/pages/car-list";
 
const routes = {
  '/': HomeCatalogue, // default page
  '/home': HomeCatalogue,
  '/products': CarList,
};
 
export default routes;
