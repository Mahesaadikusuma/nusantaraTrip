import {
  CardArticle,
  cardDestinations,
  cardPopuler,
} from "../templates/templateCreator";
import Carousel from "./atom/Carousel";

const HomeContainer = (destinations, dataArticle) => {
  // const data = destinations.forEach((element) => {
  //   console.log(element);
  // });

  return `
    <div class="container">
      <div class="row p-2">
        ${Carousel(destinations)}
      </div>

      <div class="row p-2 my-5">
        <article class="thumbnail">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h1 class="fw-bold">
                Nusantara Trip Exploring the Boundless Beauty of Indonesia
              </h1>
              <p class="mt-5"> 
                Join Nusantara Trip to explore the best tourism events across
                the Indonesian archipelago. From cultural festivals in Bali to
                traditional art performances in Yogyakarta, Nusantara Trip
                showcases various exciting events that highlight the beauty
                and cultural richness of Nusantara. Each event offers a unique
                and unforgettable experience, bringing you closer to the charm
                of Indonesia.
              </p>
            </div>
            <div class="col-12 col-lg-6">
              <aside>
                <figure>
                  <img
                    src="/images/hero.webp"
                    class="img-fluid article" />
                </figure>
              </aside>
            </div>
          </div>
        </article>
      </div>

      <div class="row p-2">
        <h3>Popular Destinations</h3>
        <p class="mb-5">
          Cultural showcase: Discover Nusantara's Premier Events
        </p>
        <div class="card-popular">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            
            ${destinations
              .slice(0, 4)
              .map((destination) => cardPopuler(destination))
              .join(``)}
          </div>
        </div>
      </div>

      <div class="row p-2">
        <div class="my-5">
          <h3>Others Destination</h3>
          <p>Cultural showcase: Discover Nusantara's Premier Events</p>
        </div>
        <div class="card-other-destination">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            ${destinations
              .slice(0, 3)
              .map((destination) => cardDestinations(destination))
              .join(``)}
          </div>
        </div>

        <div class="container-b my-5">
          <a href="/#/destinations" class="btn btn-primary px-5 py-3">More Destination</a>
        </div>
      </div>

      <div class="row p-2">
        <div class="article">
          <h3>Article</h3>
          <p>Related articles about tourism</p>
          <div class="row row-cols-1 row-cols-md-3 g-4 articleCard">
            ${dataArticle
              .slice(0, 4)
              .map((article) => CardArticle(article))
              .join(``)}
            
          </div>
        </div>
      </div>
    </div>
  `;
};

export default HomeContainer;
