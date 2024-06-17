import NusantaraDB from "../../data/nusantaraDB";
import UrlParser from "../../routes/url-parser";
import DetailContainer from "../component/DetailContainer";
import LoaderContainer from "../component/atom/loader";

const Detail = {
  async render() {
    return `
      <div id="loader"></div>
      <div id="detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const APIDetail = await NusantaraDB.NusantaraDetail(url.id);

    const detailContainer = document.querySelector("#detail");
    const loader = document.querySelector("#loader");

    loader.innerHTML = LoaderContainer();

    setTimeout(async () => {
      try {
        loader.style.display = "none";
        detailContainer.innerHTML = DetailContainer(APIDetail);

        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const comment = document.querySelector("#comment");
        const ratting = document.querySelector("#ratting");

        if (navigator.onLine) {
          form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const data = {
              id_destinations: APIDetail.id,
              name: name.value,
              rating_destination: ratting.value ?? null,
              comment_destination: comment.value,
            };

            try {
              await NusantaraDB.ReviewDestinations(data);
              const updateAPI = await NusantaraDB.NusantaraDetail(url.id);
              detailContainer.innerHTML = DetailContainer(updateAPI);
            } catch (error) {
              console.log(error);
            }
          });
        } else {
          alert("Tidak ada koneksi internet, add review tidak bisa dilakukan");
          console.log("offline");
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  },
};

export default Detail;
