import CONFIG from "../../globals/config";

const ArticleDetailContainer = (article) => {
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return `
    <section class="section-details-header"></section>

      <div class="container">
        <div class="row p-2">
          <div class="thubmail">
            <figure>
              <img
              
                src="${CONFIG.BASE_IMAGE_URL}/${article.image}"
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
              <h1>${article.judul_article} </h1>
              <p>
                <img src="images/star.svg" alt="rating" class="img-fluid" />

                ${article.ratting_article_acc}
              </p>
            </div>

           

            <div class="nusantara-deskripsi-detail" id="overview">
              <h2>Overview</h2>

              <p>
                ${article.body}
              </p>

            </div>

            <div class="row customerReview" id="review">
              <h4 class="my-5">Customer Review</h4>

              ${article.user_rate_destination
                .slice(0, 20)
                .map((review) => {
                  const ratingHTML = review.rating_artikel_destination
                    ? `
                    <div class="d-flex align-items-center gap-3 my-2">
                      <img src="/images/star.svg" alt="star" style="width: 30px;" />
                      ${review.rating_artikel_destination}
                    </div>
                    `
                    : "";
                  return `
                  <div class="col-12 col-lg-4 mb-3 gap-4">
                    <div class="card shadow-lg rounded-3 h-100">
                      <div class="card-body">
                        <div class="avatar d-flex align-items-center gap-4">
                          <img
                            src="images/avatar.webp"
                            alt="avatar-user"
                            class="img-fluid" />
                          <h5 class="card-title my-3">${review.name}</h5>
                        </div>
                        ${ratingHTML}

                        <p class="my-3">${formatDate(review.created_at)}</p>

                        <p class="card-text">
                          ${review.comment_artikel_destination}
                        </p>
                      </div>
                    </div>
                  </div>`;
                })
                .join("")}
            </div>
          </div>
        </div>

        <div class="row p-3">
          <div class="nusantara-add-review rounded-2 shadow">
            <h4 class="mb-3">Add Review</h4>
                ${FormData()}
            
          </div>
        </div>
      </div>
    `;
};

const FormData = () => {
  return `
    <form id="form">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="name" required />
      </div>

      <div class="mb-3">
        <label for="ratting" class="form-label">Ratting</label>
        <input
          type="number"
          class="form-control"
          id="ratting"
          placeholder="" />
      </div>

      <div class="mb-3">
        <label for="comment" class="form-label">Review</label>

        <textarea id="comment" 
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea" required></textarea>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Button</button>
      </div>
    </form>
  `;
};

export default ArticleDetailContainer;
