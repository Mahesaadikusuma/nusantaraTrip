import CONFIG from "../../../globals/config";

const Carousel = (destination) => {
  return `
    <div class="carousel">
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators d-none d-lg-flex">
                ${destination.slice(0, 10).map((destination, index) => {
                  return `
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="${index}"
                    class="${index === 0 ? "active" : ""}"
                    aria-current="${index === 0 ? "true" : "false"}"
                    aria-label="Slide ${index + 1}">
                </button>`;
                })}
            </div>


        <div class="carousel-inner">
            ${destination.slice(0, 10).map((destination, index) => {
              return `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                <figure class="carousel-img">
                <img
                    src="${CONFIG.BASE_IMAGE_URL}/${destination.thubmnail}"
                    class="img-fluid gd"
                    alt="..." />
                </figure>
                <div class="carousel-caption d-none d-md-block">
                <h5>${destination.name}</h5>
                <p>Malang, Indonesia</p>
                </div>
            </div>`;
            })};
            
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
            
        </div>
    </div>
    `;
};

export default Carousel;
