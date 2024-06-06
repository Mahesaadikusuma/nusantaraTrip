import Article from "../views/pages/Article";
import Detail from "../views/pages/Detail";
import Home from "../views/pages/home";

const routes = {
  "/": Home, // default page
  "/article": Article,
  "/detail/:id": Detail,
};

export default routes;
