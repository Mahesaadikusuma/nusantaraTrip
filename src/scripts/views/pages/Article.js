import NusantaraDB from "../../data/nusantaraDB";
import ArticleContainer from "../component/Article";
import LoaderCoontainer from "../component/atom/loader";

const Article = {
  async render() {
    return `
      <div id="loader"></div>
      <div id="article"></div>
    `;
  },

  async afterRender() {
    const loader = document.getElementById("loader");
    const articleID = document.getElementById("article");

    const ArticleAPI = await NusantaraDB.Article();
    loader.innerHTML = LoaderCoontainer();

    setTimeout(() => {
      try {
        loader.style.display = "none";
        articleID.innerHTML = ArticleContainer(ArticleAPI);
      } catch (error) {
        console.log(error);
      }
    }, 300);
  },
};

export default Article;
