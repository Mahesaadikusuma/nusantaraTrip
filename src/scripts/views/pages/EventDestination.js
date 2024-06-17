import NusantaraDB from "../../data/nusantaraDB";
import UrlParser from "../../routes/url-parser";
import DetailContainer from "../component/DetailContainer";
import EventContainer from "../component/EventContainer";
import LoaderCoontainer from "../component/atom/loader";

const EventDestination = {
  async render() {
    return `
      <div id="loader">
          
      </div>
      <div id="detail">
        dasdas
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const APIDetail = await NusantaraDB.EventDestinations(url.id);

    console.log(APIDetail);
    const detailContainer = document.querySelector("#detail");
    const loader = document.querySelector("#loader");

    loader.innerHTML = LoaderCoontainer();
    // console.log(APIDetail);
    setTimeout(() => {
      try {
        loader.style.display = "none";
        detailContainer.innerHTML = EventContainer(APIDetail);
        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const comment = document.querySelector("#comment");
        const ratting = document.querySelector("#ratting");
        console.log(ratting);

        if (navigator.onLine) {
          form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const data = {
              id_event_destinations: APIDetail.id,
              name: name.value,
              rating_event_destination: ratting.value ?? null,
              comment_event_destination: comment.value,
            };

            try {
              await NusantaraDB.ReviewDestinations(data);
              const updateAPI = await NusantaraDB.EventDestinations(url.id);
              detailContainer.innerHTML = EventContainer(updateAPI);
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

export default EventDestination;
