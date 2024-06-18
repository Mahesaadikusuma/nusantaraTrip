import API_ENDPOINT from "../../globals/api-endpoint";
import CONFIG from "../../globals/config";
// http://127.0.0.1:8000/storage/thubmnail/6SYKx9zuOztu5CNIL7sIp88zwPCxOt4xlbBMond8.jpg
const limitCharacter = 100;

const cardPopuler = (destination) => {
  return `
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card h-100 shadow-lg rounded-3">
      <div class="container">
        <a href="/#/detail/${destination.slug}">
          <figure>
            <img
              src="${CONFIG.BASE_IMAGE_URL}/${destination.thubmnail}"
              class="card-img-top"
              alt="${destination.name}" />
          </figure>
        </a>
      </div>

      <div class="card-body">
        <div class="container-upper-card">
          <div class="container-txt">
            <h3 class="card-title  ">${destination.name}</h3>
            <div class="container-img">
              <aside class="rate-popular-card">
                <p>
                  <img
                    src="/images/star_black.svg"
                    alt="ratting"
                    class="img-fluid" />

                  ${destination.ratting_destination_acc}
                </p>
              </aside>
            </div>
          </div>
      
            <p class="card-title-ex text-body-tertiary ">${
              destination.location
            }, Indonesia</p>

        </div>
        <p class="card-text fs-6">
          ${destination.description.substring(0, limitCharacter) + "..."}
        </p>
      </div>
    </div>
  </div>`;
};

const cardDestinations = (destination) => {
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(destination.price);
  return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100 shadow-lg rounded-3">
        <div class="container">
          <a href="#/detail/${destination.slug}">
            <figure>
              <img
                src="${CONFIG.BASE_IMAGE_URL}/${destination.thubmnail}"
                class="card-img top"
                alt="${destination.name}" />
            </figure>
          </a>
        </div>
        <div class="card-body">
          <div class="container-upper-card">
            <div class="container-txt">
              <h3 class="card-title">${destination.name}</h3>
              <div
                class="nusantara-location d-flex align-items-center gap-2">
                <img
                  src="/images/Location.svg"
                  alt="location Icon"
                  class="img-fluid" />
                
                <p>${destination.location}, Indonesia</p>
              </div>
              <div class="nusantara-ticket">
                <img src="./images/ticket.svg" alt="" />

                <p class="text-success fw-bold">IDR. ${price}</p>
              </div>
            </div>
          </div>
          <p class="card-text">
            ${destination.description.substring(0, limitCharacter) + "..."}
          </p>
        </div>
      </div>
    </div>
  `;
};

const CardArticle = (article) => {
  return `
    <div class="col-12 col-md-6 col-lg-3">
      <a href="/#/article/${article.slug}">
        <div class="card text-white ">
          <img
            src="${CONFIG.BASE_IMAGE_URL}/${article.image}"
            class="card-img"
            alt="${article.judul_article}" />
          <div class="card-img-overlay">
            <h5 class="card-title">
              ${article.judul_article.substring(0, 25)}
            </h5>
            <p class="card-text">
              ${article.body.substring(0, 50)}
            </p>
          </div>
        </div>
      </a>
    </div>
  `;
};

export { cardPopuler, cardDestinations, CardArticle };
