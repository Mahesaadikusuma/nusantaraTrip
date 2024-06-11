import NusantaraDB from "../../data/nusantaraDB";
import UrlParser from "../../routes/url-parser";
import DetailContainer from "../component/DetailContainer";
import LoaderCoontainer from "../component/atom/loader";

const Detail = {
  async render() {
    return `
      <div id="loader">
          
      </div>
      <div id="detail">
      
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const APIDetail = await NusantaraDB.NusantaraDetail(url.id);

    console.log(APIDetail);
    const detailContainer = document.querySelector("#detail");
    const loader = document.querySelector("#loader");

    loader.innerHTML = LoaderCoontainer();
    // console.log(APIDetail);
    setTimeout(() => {
      try {
        loader.style.display = "none";
        detailContainer.innerHTML = DetailContainer(APIDetail);
        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const comment = document.querySelector("#comment");
        const ratting = document.querySelector("#ratting");

        form.addEventListener("submit", async (event) => {
          event.preventDefault();

          // Reset error messages

          const data = {
            id_destinations: APIDetail.id,
            name: name.value,
            rating_destination: ratting.value ?? null,
            comment_destination: comment.value,
          };

          await NusantaraDB.ReviewDestinations(data);
          const updateAPI = await NusantaraDB.NusantaraDetail(url.id);
          detailContainer.innerHTML = DetailContainer(updateAPI);
        });
      } catch (error) {
        console.log(error);
      }
    }, 500);
  },
};

export default Detail;
