import Article from "../views/pages/Article";
import ArticleDetail from "../views/pages/ArticleDetail";
import Detail from "../views/pages/Detail";
import EventDestination from "../views/pages/EventDestination";
import More from "../views/pages/More";
import Home from "../views/pages/home";

const routes = {
  "/": Home, // default page
  "/article": Article,
  "/article/:id": ArticleDetail,
  "/detail/:id": Detail,
  "/destinations": More,
  "/event-destination/:id": EventDestination,
};

export default routes;
