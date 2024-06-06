import NusantaraDB from "../../data/nusantaraDB";
import UrlParser from "../../routes/url-parser";
import { CreateDetail } from "../templates/templateCreator";
const Detail = {
  async render() {
    return `
      <div id="detail">
      
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailDestinations = await NusantaraDB.NusantaraDetail(url.id);
    const detailContainer = document.querySelector("#detail");
    console.log(detailDestinations);

    detailContainer.innerHTML = CreateDetail(detailDestinations);
  },
};

export default Detail;
