import NusantaraDB from "../../data/nusantaraDB";
import { HomeContainer } from "../templates/templateCreator";

const Home = {
  async render() {
    return `      
      <h2>Destination</h2>
      <div id="home">
        adas
      </div>
    `;
  },

  async afterRender() {
    const destinations = await NusantaraDB.NusantaraDestinations();
    console.log(destinations);

    const homeContainer = document.querySelector("#home");
    console.log(homeContainer);
    destinations.forEach((destination) => {
      homeContainer.innerHTML += HomeContainer(destination);
    });
  },
};

export default Home;
