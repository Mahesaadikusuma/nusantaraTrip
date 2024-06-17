import NusantaraDB from "../../data/nusantaraDB";
import UrlParser from "../../routes/url-parser";
import ArticleDetailContainer from "../component/ArticleDetailContainer";
import DetailContainer from "../component/DetailContainer";
import LoaderCoontainer from "../component/atom/loader";

const ArticleDetail = {
  async render() {
    return `
      <div id="loader">
          
      </div>
      <div id="detail">
        asdsa
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const APIDetail = await NusantaraDB.ArticleDetail(url.id);
    // console.log(APIDetail);
    // console.log(url.id);
    const detailContainer = document.querySelector("#detail");
    const loader = document.querySelector("#loader");

    loader.innerHTML = LoaderCoontainer();
    // console.log(APIDetail);
    setTimeout(() => {
      try {
        loader.style.display = "none";
        detailContainer.innerHTML = ArticleDetailContainer(APIDetail);
        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const comment = document.querySelector("#comment");

        const ratting = document.querySelector("#ratting");
        // console.log(form);
        if (navigator.onLine) {
          form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const data = {
              id_artikel_destinations: APIDetail.id,
              name: name.value,
              rating_artikel_destination: ratting.value ?? null,
              comment_artikel_destination: comment.value,
            };

            try {
              await NusantaraDB.ReviewDestinations(data);
              const updateAPI = await NusantaraDB.ArticleDetail(url.id);
              detailContainer.innerHTML = ArticleDetailContainer(updateAPI);
            } catch (error) {
              console.log(error);
            }
          });
        } else {
          alert("Tidak ada koneksi internet add review tidak bisa dilakukan");
          console.log("offline");
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  },
};

export default ArticleDetail;
