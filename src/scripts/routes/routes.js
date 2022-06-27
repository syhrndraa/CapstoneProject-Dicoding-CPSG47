import Detail from '../views/pages/detail';
import HomeCatalogue from "../views/pages/home";
// import CarList from "../views/pages/car-list";
 
const routes = {
  '/': HomeCatalogue, // default page
  '/home': HomeCatalogue,
  '/detail/:id': Detail,
  // '/products': CarList,
};
 
export default routes;
