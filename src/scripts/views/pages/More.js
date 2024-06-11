import NusantaraDB from "../../data/nusantaraDB";
import Destinations from "../component/Destinations";
import LoaderCoontainer from "../component/atom/loader";

const More = {
  async render() {
    return `
      <div id="loader"></div>
      <div id="destinations"></div>
    `;
  },

  async afterRender() {
    const data = await NusantaraDB.NusantaraDestinations();
    const loader = document.getElementById("loader");
    const destination = document.getElementById("destinations");

    loader.innerHTML = LoaderCoontainer();

    setTimeout(() => {
      try {
        loader.style.display = "none";
        destination.innerHTML = Destinations(data);
      } catch (error) {
        console.log(error);
      }
    }, 500);
  },
};

export default More;
