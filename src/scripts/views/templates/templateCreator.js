import API_ENDPOINT from "../../globals/api-endpoint";
import CONFIG from "../../globals/config";
// http://127.0.0.1:8000/storage/thubmnail/6SYKx9zuOztu5CNIL7sIp88zwPCxOt4xlbBMond8.jpg
const HomeContainer = (destination) => {
  return `
    <div>
        <h1>${destination.name}</h1>
        <a href="/#/detail/${destination.id}">Detail</a>
        <img
          src="${CONFIG.BASE_IMAGE_URL}/${destination.thubmnail}" alt="${destination.name}"
          class="img-fluid thubmailDetail w-50" />
    </div>
  `;
};

// images/thumbnail.jpg
const CreateDetail = (destination) => {
  return `
    <section class="section-details-header"></section>

      <div class="container">
        <div class="row p-2">
          <div class="thubmail">
            <figure>
              <img
              
                src="${CONFIG.BASE_IMAGE_URL}/${destination.thubmnail}"
                class="img-fluid thubmailDetail" />
            </figure>

            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#overview">
                  Overview
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#event">Event</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#article">Article</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#review">Review</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row p-2">
          <div class="nusantara">
            <div class="nusantara-overview">
              <h1>${destination.name} </h1>
              <p>
                <img src="images/star.svg" alt="rating" class="img-fluid" />

                ${destination.ratting_destination_acc}
              </p>
            </div>

            <div class="nusantara-location d-flex align-items-center gap-3">
              <img
                src="images/Location.svg"
                alt="location Icon"
                class="img-fluid" />
              <!-- asd -->
              <p>${destination.location}, Indonesia</p>
            </div>

            <div class="nusantara-ticket">
              <img src="images/ticket.svg" alt="" />

              <p>IDR. ${destination.price}</p>
            </div>

            <div class="nusantara-deskripsi" id="overview">
              <h2>Overview</h2>

              <p>
                ${destination.description}
              </p>

              

              <div class="nusantara-event" id="event">
                <h3>Event</h3>
                <p>interesting events in this destination</p>

                <ul class="event-list">
                  <li class="mb-2">
                    <a href="#">15 June 2024 - Coral Restoration Workshop</a>
                  </li>

                  <li class="mb-2">
                    <a href="#">15 June 2024 - Coral Restoration Workshop</a>
                  </li>

                  <li class="mb-2">
                    <a href="#">15 June 2024 - Coral Restoration Workshop</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row customerReview" id="review">
              <h4 class="my-5">Customer Review</h4>
              <div class="col-12 col-lg-4 mb-3 mb-sm-0">
                <div class="card shadow-lg rounded-3">
                  <div class="card-body">
                    <div class="avatar">
                      <img
                        src="images/avatar.png"
                        alt="avatar-user"
                        class="img-fluid" />
                      <h5 class="card-title my-3">Special title treatment</h5>
                    </div>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row p-3">
          <div class="nusantara-add-review rounded-2 shadow">
            <h4 class="mb-3">Add Review</h4>

            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="name" />
              </div>
              <div class="mb-3">
                <label for="review" class="form-label">Password</label>

                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"></textarea>
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="button">Button</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
};

export { HomeContainer, CreateDetail };
