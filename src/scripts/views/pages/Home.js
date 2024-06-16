import NusantaraDB from "../../data/nusantaraDB";
import HomeContainer from "../component/HomeContainer";
import LoaderCoontainer from "../component/atom/loader";

const Home = {
  async render() {
    return `      
        <div id="loader">
          
        </div>
      <div id="home"></div>
      
    `;
  },

  async afterRender() {
    const data = await NusantaraDB.NusantaraDestinations();
    const dataArticle = await NusantaraDB.Article();
    console.log(data);
    const homeContainer = document.querySelector("#home");
    const loader = document.querySelector("#loader");
    loader.innerHTML = LoaderCoontainer();

    setTimeout(() => {
      try {
        loader.style.display = "none";
        homeContainer.innerHTML = HomeContainer(data, dataArticle);
      } catch (error) {
        console.log(error);
      }
    }, 300);

    // data.map((destination) => {
    //   homeContainer.innerHTML += HomeContainer(destination);
    // });
  },
};

export default Home;
