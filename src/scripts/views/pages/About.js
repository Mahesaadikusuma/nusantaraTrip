import NusantaraDB from "../../data/nusantaraDB";
import AboutContainer from "../component/AboutContainer";

import LoaderCoontainer from "../component/atom/loader";

const About = {
  async render() {
    return `
      <div id="loader"></div>
      <div id="about">
        test
      </div>
    `;
  },

  async afterRender() {
    const loader = document.getElementById("loader");
    const about = document.getElementById("about");

    const ArticleAPI = await NusantaraDB.Article();
    loader.innerHTML = LoaderCoontainer();

    setTimeout(() => {
      try {
        loader.style.display = "none";
        about.innerHTML = AboutContainer();
      } catch (error) {
        console.log(error);
      }
    }, 300);
  },
};

export default About;
